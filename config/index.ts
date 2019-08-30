const dotenv = require('dotenv')
dotenv.config();
export const host = process.env.DB_HOST;
export const dbname = process.env.DB_NAME;
export const username = process.env.DB_USERNAME;
export const portNumber = process.env.PORT; 
export const password = process.env.DB_PASSWORD; 