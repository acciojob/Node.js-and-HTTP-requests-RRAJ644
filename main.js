const https = require('https')

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// TODO: Implement this function
const server = https
  .createServer((req, res) => {
    https.get(url, (res) => {
      let data = ''

      res.on('end', () => {
        try {
          const jsonResponse = JSON.parse(data)
          console.log(`Title: ${jsonResponse.title}`)
        } catch (error) {
          console.log('Error parsing JSON:', error.message)
        }
      })
    })
  })
  .on('error', (err) => {
    console.log('Request failed:', err.message)
  })

server.listen(300, () => {
  console.log('server is listening at port 3000')
})
