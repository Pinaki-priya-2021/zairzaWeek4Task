const express = require('express');
const app = express();
const path = require('path');
const pageRouter = require('./routes/pages');
const authRouter = require('./routes/auth');


/*********************Defining paths*******************/
app.use(express.static(path.join(__dirname,'/assets')));
app.set('views' , path.join(__dirname , 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine' , 'html');
/********************************************************/

/********************************Defining Routes**************************************/

app.use('/',pageRouter);
console.log("sent to pagerouter");
app.use('/auth', authRouter);
console.log("sent to authrouter");


/*********************************************************************/

app.listen(3002, () => {
console.log("server is connected at port 3002........");
});