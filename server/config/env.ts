import dotenv from 'dotenv'

dotenv.config();

// const DATABASE_URL = process.env.DATABASE_URL;  

export const {DATABASE_URL, JWT_SECRET} = process.env;

