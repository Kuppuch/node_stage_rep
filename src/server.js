const db = require('../config/db.config');
const express = require('express');

const PORT = process.env.PORT || 8080

db.sequelize
    .sync()
    .catch(err => {
        console.log(err);
    })

const app = express();
app.listen(PORT, () => console.log(`server started on port ${PORT}`))