const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("coucou");
  console.log('The value of PORT is:', process.env.PORT);
  console.log('The value of QOVERY_DATABASE_MY_MONGODB_NAME is:', process.env.QOVERY_DATABASE_MY_MONGODB_NAME);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
