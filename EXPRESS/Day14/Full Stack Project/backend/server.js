var express = require('express');
const app = express();
var cors = require('cors');
const db_conn = require('./db_conn.js');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post("/adduser",(req,res)=>{
    const { fname, lname, dob, gender } = req.body.userdata;

    db_conn.query("insert into user (fname,lname,dob,gender) values (?,?,?,?)", [fname, lname, dob, gender], (err, result) => {
        if (err) res.send({ error: "not able to add user, try again" });
        else {
            console.log(result);
            console.log(result.insertId);
            if (result.insertId > 0)
                res.send({ result: 'New User added with id :-' + result.insertId });
        }
     });
});

app.listen(8081,()=>console.log('rest api running at port no 8081'));