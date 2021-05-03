const app = require('express')()
require('dotenv').config()

app.set('port', process.env.PORT | 5676)

app.route('/').get((req, res) => {
  console.log(`${req.ip}`)
  res.end('Hello World')
})

app.listen(app.get('port'), () => {
  console.log('Server is ready')
})
