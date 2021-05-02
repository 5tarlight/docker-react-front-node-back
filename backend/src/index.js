const app = require('express')()
require('dotenv').config()

app.set('port', process.env.PORT | 5676)

app.listen(app.get('port'), () => {
  console.log('Server is ready')
})
