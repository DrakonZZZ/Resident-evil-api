import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './lib/db.js';
import errorHandler from './lib/errorMiddleware.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(errorHandler);

const cache = {};

//caching

const cacheMiddleWare = (req, res, next) => {
  const key = req.ogURL;
  if (cache[key]) {
    res.json(cache[key]);
  } else {
    next();
  }
};

app.get('/api/char/all', async (req, res) => {
  const client = await db.connect();
  try {
    const result = await client.query('SELECT * FROM resident_evil_characters');
    const characters = result.rows;
    res.json(characters);
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'Something went wrong' });
  } finally {
    client.release();
  }
});

app.get('/api/char/search', async (req, res) => {
  try {
    const { name } = req.query;
    const client = await db.connect();
    const searchResults = await client.query(
      'SELECT * FROM resident_evil_characters WHERE name ILIKE $1',
      [`%${name}%`]
    );
    const characters = searchResults.rows;
    res.json(characters);
  } catch (error) {
    console.error('Error searching characters:', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/char/:id', async (req, res) => {
  const { id } = req.params;
  const client = await db.connect();

  try {
    const result = await client.query(
      'SELECT * FROM resident_evil_characters WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Character not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error excuting query', error.stack);
    res.status(500).json({ error: 'Something went wrong' });
  } finally {
    client.release();
  }
});

app.get('/api/char', cacheMiddleWare, async (req, res) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 10;
  const offset = (page - 1) * pageSize;
  const client = await db.connect();

  try {
    const result = await client.query(
      'SELECT * FROM resident_evil_characters OFFSET $1 LIMIT $2',
      [offset, pageSize]
    );
    const characters = result.rows;

    cache[req.originalUrl] = characters;
    res.json(characters);
  } catch (error) {
    console.error('Error excuting query', error.stack);
    res.status(500).json({ error: 'Something went wrong' });
  } finally {
    client.release();
  }
});

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
