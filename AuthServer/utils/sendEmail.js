var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TurboTerryTest@gmail.com',
    pass: 'Test@@1234'
  }
});

var mailOptions = {
  from: 'TurboTerryTest@gmail.com',
  to: 'm.yauch@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });