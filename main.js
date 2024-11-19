const https = require('https')

// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/todos/1'

// Create an HTTP server
const server = https.createServer((req, res) => {
  // Perform the GET request
  https
    .get(url, (response) => {
      let data = ''

      // Collect data chunks
      response.on('data', (chunk) => {
        data += chunk
      })

      // Process and send the data once fully received
      response.on('end', () => {
        try {
          const jsonResponse = JSON.parse(data)
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ title: jsonResponse.title }))
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end('Error parsing JSON')
        }
      })
    })
    .on('error', (err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Request failed: ' + err.message)
    })
})

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
