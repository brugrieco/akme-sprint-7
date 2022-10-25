const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware')
const cors = require('cors')

//llamado a rutas
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const mainRouter = require('./routes/mainRouter');

//llamado a rutas por API
const productsAPIRouter = require('./routes/api/productsRouter');
const usersAPIRouter = require('./routes/api/usersRouter');

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public')))
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));

app.use(session({
    secret: 'secret',	
    resave: false,
    saveUninitialized: false    
}))

app.use(cookies())
app.use(userLoggedMiddleware)

//rutas
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

//rutas por API
app.use('/api/products', productsAPIRouter);
app.use('/api/users', usersAPIRouter);

app.listen(process.env.PORT || port, () => console.log(`servidor funcionando en el puerto ${port}! `))