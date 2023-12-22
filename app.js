// build koa server

//const Koa = require('koa');
//const KoaRouter = require('koa-router');

import Koa from 'koa';
import KoaRouter from 'koa-router';

// not required -- shows json in browser
const json = require('koa-json');

const port = 3100;
const app = new Koa();
const router = new KoaRouter();

app.use(json());
// simple middleware

//app.use(async ctx =>(ctx.body = 'Welcome to Jacqueline Taylor and Friends'));
//app.use(async ctx =>(ctx.body = {Text:'Welcome to Jacqueline Taylor and Friends'}));


router.get('/home', ctx => {
    console.log(ctx.request.query),
    ctx.body = {Text:'Welcome to Jacqueline Taylor and Friends'},
    console.log(ctx.response)
});

// router middleware
app.use(router.routes()).use(router.allowedMethods());



app.listen(port, () => {console.log(`Server is running on port ${port}`)});