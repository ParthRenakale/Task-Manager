const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());

const travesre = 4;
const PORT = process.env.PORT || 5500;

app.use(cors());


const TodoItemRoute = require('./routes/todoItems');


mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))


app.use('/', TodoItemRoute);
//comments added by himanshu
//added more



//connect to server
app.listen(PORT, ()=> console.log("Server connected") );