const Express = require('express');
const app = Express();
const path = require('path');
const routes = require('./routes');
app.set('view engine', 'ejs')
app.use('/',routes);
app.use('/public',Express.static(path.resolve(__dirname,'public')))
app.listen(3000,()=>{console.log('server listening in localhost:3000');})