const dotenv = require('dotenv');
const mailer= require('nodemailer');
const { message } = require('statuses');
// const dotenv = require('dotenv');

dotenv.config({
    path : './.env'
});

exports.result = (req,res) =>{
    // console.log(req.body);
    const {from, to, sub} = req.body;
    const body = req.body.message;
    
    const transporter = mailer.createTransport({
     service: process.env.SERVICE,
     auth:{
         user: process.env.USER,
         pass: process.env.PASSWORD
     }
 });

 const mailOptions ={
     from: from,
     to: to,
     subject: sub,
     text: body 
 }

transporter.sendMail(mailOptions,(error,info) => {
    if(error)
    console.log(error);
    else{
        console.log("Email sent: " +info.response);
    }
})
console.log("mail.send");
res.send("mail sent");
}

