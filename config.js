import pg from 'pg'
import dotenv from 'dotenv' 

const { Pool } = pg

dotenv.config()

// Method 3 With SSL reject autoenabled through object

const sslDevConfig =  {
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_DATABASE
}

const sslProdConfig = { connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}}

const pool = new Pool(process.env.NODE_ENV === 'production' ? sslProdConfig : sslDevConfig )

export default pool

