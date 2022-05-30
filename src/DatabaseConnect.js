import { Pool } from 'pg'

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    ssl: (process.env.POSTGRES_USE_SSL.toLocaleLowerCase().charAt(0) === 'y' ? ({
        rejectUnauthorized: false,
    }) : false)
});

export default pool;
