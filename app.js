// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { addJob, getJobs, updateJobStatus } = require('./job');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all jobs
app.get('/api/jobs', (req, res) => {
  res.json(getJobs());
});

// Add a new job
app.post('/api/jobs', (req, res) => {
  const { company, role, where, status } = req.body;
  if (!company || !role || !where || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const job = addJob(company, role, where, status);
  res.status(201).json(job);
});

// Update job status
app.patch('/api/jobs/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Missing status' });
  }
  const job = updateJobStatus(Number(id), status);
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
  res.json(job);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
