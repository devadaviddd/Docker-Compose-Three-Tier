require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
const app = express()
const port = 8000
const bodyParser = require('body-parser')

// Middleware for parsing JSON
app.use(express.json())
app.use(bodyParser.json())

app.use(cors())

app.get('/', async (req, res) => {
  // Create a MySQL connection
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    })

    const [results] = await connection.query('SELECT * FROM users')
    res.json(results)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
