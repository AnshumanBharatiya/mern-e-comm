const express = require('express');
const cors = require("cors");

// const createConnection = require('./connections');
const app = express();
// const PORT = process.env.PORT || 8000;

// createConnection('mongodb://localhost:27017/node')
// .then(() => console.log('Mongodb Connected Succesfully'))
// .catch((err) => console.log("Something Went Wrong", err.message));

// app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    return res.status(200).send({
        message:"Welcome to my project",
        status:true
    })
});

module.exports = app;

// app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));