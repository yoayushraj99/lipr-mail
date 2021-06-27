const nodemailer = require('nodemailer');
const cron = require('node-cron');

// 24 * 60 * 60 * 1000 * 7

const SendMail = (data) => {
  console.log(data);
  const { to, cc, subject, body } = data;
  const user = 'lewracorp69@gmail.com';
  const pass = 'h%!CEdnROK@ct';
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });

  let mailOptions = {
    from: user,
    to: to,
    cc: cc,
    subject: subject,
    text: body,
  };

  cron.schedule('* * * * * *', () => {
    console.log(mailOptions);
    console.log('sending email');
    transporter.sendMail(mailOptions);
  });
};

module.exports = SendMail;
