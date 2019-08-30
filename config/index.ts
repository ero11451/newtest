const dotenv = require('dotenv')
dotenv.config();
const host = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
export const portNumber = process.env.PORT; 
const password = process.env.DB_PASSWORD; 
module.exports.envVar = {  host,dbname,username, password}