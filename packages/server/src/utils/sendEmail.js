import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

export const sendEmail = async (recipient, url, linkText) => {
  nodemailer.createTestAccount(async (err1, account) => {
    if (err1) {
      console.log(err1);
    }

    console.log("Credentials obtained, sending message...");

    const auth = {
      auth: {
        domain: "sandbox600440ecfe3d4746b7783157b395f369.mailgun.org",
        api_key: "979d66711c459b1686949f26badc8434-a3d67641-c5639e0a"
      }
    };

    const transporter = await nodemailer.createTransport(mg(auth));

    const message = {
      from: "noreply@ofree.it",
      to: recipient,
      subject: "Welcome on board!",
      html: `<html>
        <body>
        <a href="${url}">${linkText}</a>
        </body>
        </html>`
    };

    console.log("Attempting to send the email");
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};
