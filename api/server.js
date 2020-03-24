'use strict';

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  prisma.user
    .findOne({ where: { name: 'test' } })
    .then((result) => {
      console.log(result);
      res.send('ok');
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

app.listen({ port: 3000 }, () => {
  console.log('server started');
});
