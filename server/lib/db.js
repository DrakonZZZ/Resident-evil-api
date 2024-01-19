import pg from 'pg';

const settings = {
  user: 'postgres',
  host: 'localhost',
  database: 'Resident_Evil',
  password: '1q2w3e4r5t',
  port: 5432,
};

const db = new pg.Pool(settings);

export default db;
