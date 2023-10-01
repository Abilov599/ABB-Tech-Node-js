import http from 'http';

// Initialize request count to 0
let requestCount = 0;

// Create an HTTP server
const server = http.createServer((_req, res) => {
  // Increment the request count for each incoming request
  requestCount += 1;

  // Send a JSON response
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: 'Request handled successfully',
    requestCount,
  }));
});

// Get the custom port from command line arguments if provided
const customPortArg = process.argv.find((arg) => arg.startsWith('--port='));
if (customPortArg) {
  const customPort = customPortArg.split('=')[1];
  server.listen(customPort, () => {
    console.log(`Server is running on http://localhost:${customPort}/`);
  });
} else {
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
  });
}
