/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* eslint-disable indent */
const express = require('express');
const { appendFileSync } = require('fs');

const app = express();

app.use(express.json());

app.post('/log', (req, res) => {
  const { timestamp, message, userId } = req.body;
  const logLine = `[${timestamp}] (${userId}): ${message}\n`;

  // Append to a file
  appendFileSync('logs.txt', logLine);
  console.log("Log saved:", logLine.trim());

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Log server running on port ${PORT}`);
});