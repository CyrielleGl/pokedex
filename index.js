const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 5003

const app = express()

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Ecoute du serveur
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

