import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'GrandPromDevSQL_69420',
  database: 'killingmyself'
}).promise()
const result = await pool.query("SELECT * FROM users")
console.log(result)
const role = await pool.query("SELECT Role FROM users WHERe id = ?", [4])
console.log(role)