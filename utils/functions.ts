import mongoose from 'mongoose';

const amqp = require('amqplib');
const rabbit = process.env.rabbit;
const videoHistoryDbHost = process.env.videoHistoryDbHost;

export function connectDB() {
  mongoose.connect(videoHistoryDbHost as string);
  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Database connected successfully.');
  });

  connection.on('disconnected', () => {
    console.log('Database disconnected successfully.');
  });

  connection.on('error', () => {
    console.error('Connection error has occurred.');
  });
}

export async function connectRabbit() {
  const connection = await amqp.connect(rabbit);
  return connection.createChannel();
}
