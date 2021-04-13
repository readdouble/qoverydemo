const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("coucou");
  res.send('The value of PORT is:', process.env.PORT);
  res.send('The value of QOVERY_DATABASE_MY_MONGODB_NAME is:', process.env.QOVERY_DATABASE_MY_MONGODB_NAME);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
