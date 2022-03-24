const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5003

const app = express()

// Middleware
app.use(express.static(path.join(__dirname, 'public')))

// Ecoute du serveur
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

