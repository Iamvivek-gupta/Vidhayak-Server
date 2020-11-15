const Vidhayak = require('./../models/userModel');
const sgMail = require('@sendgrid/mail');
var nodemailer = require('nodemailer');
sgMail.setApiKey('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')

exports.createUser = async (req, res) =>{
    try{
        var email = req.body.email;
        const newTour = await Vidhayak.create(req.body)
        res.status(201).json({
            status : 'success',
            data : {
                tours: newTour
            }
        });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vivek.jmdsmvdu@gmail.com',
              pass: 'pramilavijay123'
            }
          });
          
          var mailOptions = {
            from: 'vivek.jmdsmvdu@gmail.com',
            to: email,
            subject: 'Welcome',
            html: `<h1>thank you for contacting to us our team reach you shortly</h1>`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch(err){
        res.status(400).json({
            status : 'fail',
            message : err
        })
    }
        
    }
    