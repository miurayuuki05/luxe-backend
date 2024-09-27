const { Kafka } = require('kafkajs');

const kafkaconf = new Kafka({
    clientId: 'user-function',
    brokers: ['kafka:9092']
});

const producer = kafkaconf.producer();
const consumer = kafkaconf.consumer({ groupId: 'user-function' });

module.exports = { producer, consumer };

