// Upcoming Endpoints

const express = require('express');
const asyncHandle = require('express-async-handler');
const launch = require('../builders/launch-query');
const sort = require('../builders/launch-sort');

const v2 = express.Router();

// Upcoming launches by date, year, or all
v2.get('/', asyncHandle(async (req, res) => {
  const data = await global.db
    .collection('upcoming_v2')
    .find(launch.launchQuery(req), { _id: 0 })
    .sort(sort.launchSort(req))
    .toArray();
  res.json(data);
}));

module.exports = v2;