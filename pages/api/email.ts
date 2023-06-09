import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
    const msg = {
      to: "anandkrishmj@gmail.com", // Change to your recipient
      from: "anandkrishmj@gmail.com", // Change to your verified sender
      subject: subject,
      text: "subject",
      html: `<div>
         <div><span>Mail From: ${name}</span></div>
         <div><span>EmailId: ${email}</span></div>
         <div>${message}</div>
        </div>
        `,
    };
    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({
          message: "Status ok",
          data: "Mail Sent",
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "Status nok",
          data: error.response.body.errors,
        });
      });
  }
  return;
};
export default sendEmail;
