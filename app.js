var express = require('express')
var cors = require('cors')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
var app = express()
 
app.use(cors())
app.use(express.json())
 
app.post('/', function (req, res, next) {
  
res.send("hallo world")
// const msg = {
//   to: 'akshaysingh9198327725@gmail.com', // Change to your recipient
//   from: 'vivekvivek367@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }

// sgMail
//   .send(msg)
//   .then(() => {
//     res.send('email sent')
//   })
//   .catch((error) => {
//     res.send(error)
//   })

})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


// //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



// const express = require('express');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userRouter = require('./routes/userRoute');
// const app = express();

// dotenv.config({ path : './config.env'})
// console.log(process.env.DATABASE);
// console.log(process.env.DATABASE_PASSWORD);


// // connect Mongodb Compass

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// mongoose.connect(DB, {
//     useNewUrlParser : true,
//     useCreateIndex : true,
//     useFindAndModify : false,
//     useUnifiedTopology : true
// }).then(con =>{
//     //console.log(con.connections);
//     console.log("databas connected")
// }).catch(error =>{
//     console.log(error);
// });


// // 1) MIDDLEWARE
// app.use(cors());
// app.use(morgan('dev'));

// app.use(express.json());

// app.use((req,res,next) =>{
//     console.log('hallo from Middleware!!!!');
//     next();
// })


// app.use((req,res,next) =>{
//     req.requestTime = new Date().toISOString();
//     //console.log(req.headers);
//     next();
// })



// // 3) ROUTES
// app.use('/api/v1/users', userRouter);

// // 4) START SERVERS
//  const port = process.env.PORT || 100;

// app.listen(port, () =>{
//       console.log(`App is running on Port ${port}...`)
// });
