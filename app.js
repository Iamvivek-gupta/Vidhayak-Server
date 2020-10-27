var express = require('express')
var cors = require('cors')
const sgMail = require('@sendgrid/mail')
//sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey('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')
var app = express()
 
app.use(cors())
app.use(express.json())
 
app.post('/', function (req, res, next) {
  

const msg = {
  to: 'vivek.jmdsmvdu@gmail.com', // Change to your recipient
  from: 'vivekvivek367@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    res.send('email sent')
  })
  .catch((error) => {
    res.send(error)
  })

})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


//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