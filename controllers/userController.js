const Vidhayak = require('./../models/userModel');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

exports.createUser = async (req, res) =>{
    try{
        const newTour = await Vidhayak.create(req.body)
        res.status(201).json({
            status : 'success',
            data : {
                tours: newTour
            }
        });
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
            console.log('email sent')
        })
        .catch((error) => {
            console.log(error)
        })
    } catch(err){
        res.status(400).json({
            status : 'fail',
            message : err
        })
    }
        
    }
    