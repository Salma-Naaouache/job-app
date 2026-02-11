// job.js
let jobs = [];
let idCounter = 1;

function addJob(company, role, where, status) {
  const job = {
    id: idCounter++,
    company,
    role,
    where,
    date: new Date().toISOString().split('T')[0],
    status
  };
  jobs.push(job);
  return job;
}

function getJobs() {
  return jobs;
}

function updateJobStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  if (job) {
    job.status = status;
    return job;
  }
  return null;
}

module.exports = { addJob, getJobs, updateJobStatus };
