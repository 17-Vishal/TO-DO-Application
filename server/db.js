const Pool = require("pg").Pool;

//connect database

const pool = new Pool({
    user: "postgres",
    password: "katvicky",
    host:"localhost",
    post: 5432,
    database: "todo_app"
});

module.exports = pool;