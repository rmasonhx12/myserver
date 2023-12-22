// build koa server

const Koa = require('koa');

const port = 3100;
const app = new Koa();


// simple middleware

//app.use(async ctx =>(ctx.body = 'Welcome to Jacqueline Taylor and Friends'));
app.use(async ctx =>(ctx.body = {Text:'Welcome to Jacqueline Taylor and Friends'}));



app.listen(port, () => {console.log(`Server is running on port ${port}`)});
