// job.test.js
const { addJob, getJobs, updateJobStatus } = require('./job');

describe('Job Application Management', () => {
  beforeEach(() => {
    // Reset jobs before each test
    while (getJobs().length) getJobs().pop();
  });

  it('should add a job', () => {
    const job = addJob('Company', 'Developer', 'LinkedIn', 'Applied');
    expect(job.company).toBe('Company');
    expect(job.role).toBe('Developer');
    expect(job.where).toBe('LinkedIn');
    expect(job.status).toBe('Applied');
    expect(job.date).toBeDefined();
  });

  it('should update job status', () => {
    const job = addJob('Company', 'Developer', 'LinkedIn', 'Applied');
    const updated = updateJobStatus(job.id, 'Interview');
    expect(updated.status).toBe('Interview');
  });

  it('should return null for invalid id', () => {
    expect(updateJobStatus(999, 'Rejected')).toBeNull();
  });
});
