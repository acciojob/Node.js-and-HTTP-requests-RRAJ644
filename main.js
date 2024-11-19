const https = require('https')

const url = 'https://jsonplaceholder.typicode.com/todos/1'

https
  .get(url, (res) => {
    let data = ''

    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      try {
        const todo = JSON.parse(data)
        console.log(todo.title)
      } catch (error) {
        console.error('Error parsing JSON:', error.message)
      }
    })
  })
  .on('error', (error) => {
    console.error('Error fetching todo:', error.message)
  })
