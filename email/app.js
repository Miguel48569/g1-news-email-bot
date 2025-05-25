require("dotenv").config();
const nodemailer = require("nodemailer");

async function enviarEmail(noticias) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = noticias
    .map(
      (n) => `<p><b>${n.titulo}</b><br><a href="${n.link}">${n.link}</a></p>`
    )
    .join("");

  const texto = noticias.map((n) => `${n.titulo}\n${n.link}\n`).join("\n");

  const info = await transporter.sendMail({
    from: `"Notícias G1" <${process.env.EMAIL_USER}>`,
    to: "teste2@gmail.com", // coloque o e-mail do destinatario aqui.
    subject: "Resumo G1 - Economia",
    text: texto,
    html: html,
  });

  console.log("✅ E-mail enviado:", info.messageId);
}

module.exports = { enviarEmail };
