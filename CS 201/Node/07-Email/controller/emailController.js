const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "dora.nicolas14@ethereal.email",
      pass: "1XcNVYVZa6YGSTS4me",
    },
  });

  let info = await transporter.sendMail({
    to: "nijdld@gmail.com",
    from: "MrGoogle@google.org",
    subject: "NodeMailer Test",
    html: "<h1>Hello World!</h1><p>Testing <em>Nodemailer</em></p>",
  });
  res.json(info);
};

const resetEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "everett.glover67@ethereal.email",
      pass: "mvzvdTxgphP4Q2xkpB",
    },
  });

  let randomNum = Math.floor(
    Math.random() * (9999999999 - 1000000000) + 1000000000
  );

  let info = await transporter.sendMail({
    to: "nijdld@gmail.com",
    from: "MrGoogle@google.org",
    subject: "NodeMailer Test",
    html: `<h1>Hello!</h1><p>Your password is ${randomNum}</p>`,
  });
  res.json(info);
};

module.exports = { sendEmail, resetEmail };
