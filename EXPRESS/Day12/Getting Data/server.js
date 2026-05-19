let express = require('express');
const app = express();

app.get('/listuser', (req, res) => {
  db_conn.query('select * from user')
});