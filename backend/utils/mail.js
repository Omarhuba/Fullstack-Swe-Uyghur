const nodemailer = require('nodemailer')

exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randomValue = Math.round(Math.random() * 9);
    otp = randomValue + otp;
  }
  return otp;
};

exports.mailTransport = () => nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    }
});



exports.generateEmailTemplate = code => {
  return `

  <!DOCTYPE html>
  <html lang ="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style>
      @media only screen and (max-width: 620px){
        h1{
          font-size: 20px;
          padding: 5px;
        }
      }
      </style>
    </head>
    <body>
      <div>
        <div style="max-width: 620px; margin: 0 auto" font-family: sans-serif; color: #272727;>

          <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px";
          background: #f6f6f6; padding: 10px; text-align: center; color: #272727;">
          We are delighted to welcome you to our Team!</h1>
          <p>Please Verify Your Email To Continue Your Verification code is :</p>
          <p style="color: #272727; width: 80px; margin: 0 auto; font-weight: bold;
          text-align: center; background: #f6f6f6; border-radius: 5px;
          font-size: 25px;  ">${code}</p>

        </div>
      </div>
    </body>
  </html>
`

};







exports.plainEmailTemplate = (heading, message) => {
  return `
  <!DOCTYPE html>
  <html lang ="en">
    <head>

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      @media only screen and (max-width: 620px){
        h1{
          font-size: 20px;
          padding: 5px;
        }
      }
      </style>
    </head>
    <body>
      <div>
        <div style="max-width: 620px; margin: 0 auto" font-family: sans-serif; color: #272727;>

          <h1 style="background: #f6f6f6; padding: 10px;
           text-align: center;
            color: #272727;">${heading}</h1>
          <p style="color: #272727;
          text-align: center;">${message}</p>
        </div>
      </div>
    </body>
  </html>


`
};






exports.generatePasswordResetTemplate = (url) => {
  return `

<!doctype html>
<html lang ="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style>
    @media only screen and (max-width: 620px){
      h1{
        font-size: 20px;
        padding: 5px;
      }
    }
    </style>
  </head>
  <body>
    <div style="max-width: 620px; margin: 0 auto" font-family: sans-serif; color: #272727;>

      <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px"; background: #f6f6f6; padding: 10px; text-align: center; color: #272727;> Response to Your Reset Password Request!</h1>
      <p style="color: #272727; ">Please Link Below to Reset Password</p>
      <div style="text-align: center;">
      <a href="${url}" style="font-family: sans-serif; margin: 0 auto; padding: 20px; text-align: center; background: #e63946; border-radius: 5px; font-size: 20px 10px; color: #fff; coursor: pointer; text-decoration: none; display: inline-block;">Reset Password</a>
      </div>
    </div>
    <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
    <style>
      .main { background-color: white; }
      a:hover { border-left-width: 1em; min-height: 2em; }
    </style>
  </body>
</html>
`


}