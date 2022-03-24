const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 5003

const app = express()

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => 
    res.render('home', { title: 'Home', subtitle: 'Ma home page'}))
app.get('/about', (req, res) => 
    res.render('about', { title: 'About', subtitle: 'Ma about page'}))

// Ecoute du serveur
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

