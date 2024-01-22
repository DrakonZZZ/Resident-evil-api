import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './lib/db.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/char', async (req, res) => {
  const client = await db.connect();

  try {
    const result = await client.query('SELECT * FROM resident_evil_characters');
    res.json(result.rows);
  } catch (error) {
    console.error('Error excuting query', error.stack);
    res.status(500).json({ error: 'Something went wrong' });
  } finally {
    client.release();
  }
});

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
