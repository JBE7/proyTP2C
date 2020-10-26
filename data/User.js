const fs = require('fs').promises;
const connection = require('./connectionMongo');

async function findUserByUsername(userName){
    const connectionMongo = await connection.getConnection();
    const user = await connectionMongo.db('sample_tp2')
                        .collection('users')
                        .findOne({ _id: userName });
    return user;
};

async function pushUser(user){
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('sample_tp2')
                        .collection('users')
                        .insertOne(user);
    return result;
};

module.exports = {findUserByUsername, pushUser}