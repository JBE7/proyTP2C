//const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const { MongoClient } = require('mongodb');
require('dotenv').config();

// TODO: Crear variables de entorno, sacar el harcodeo
const uriMongo = process.env.URIMONGO;

const client = new MongoClient(uriMongo, {useUnifiedTopology: true, useNewUrlParser:true})

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.red(err)));
}

module.exports = {getConnection};