// Import required modules
import express from 'express';
import os from 'os';
import { config } from 'dotenv';
import cluster from 'cluster';

// Load environment variables from .env file
config({ path: '.env' });

// Get the total number of CPUs available
const totalCpus = os.cpus().length;

// Set the port number from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Check if this is the primary process
if (cluster.isPrimary) {
  // Fork a new worker process for each CPU
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork(); // Create a new worker
  }

  // Handle worker exit event
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    // Fork a new worker to replace the exited one
    cluster.fork();
  });
  // auto scaling

} else {
  // Create a new Express app
  const app = express();

  // Define routes
  app.get('/', (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });
  app.get('/about', (req, res) => {
    res.send(`Hello from worker about ${process.pid}`);
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port} with process ID ${process.pid}`);
  });
}