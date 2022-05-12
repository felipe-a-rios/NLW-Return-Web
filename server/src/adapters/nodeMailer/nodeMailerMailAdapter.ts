import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e2b6cc9a5c859e",
    pass: "7efbec15325c8f",
  },
});
export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Felipe Rios <almeida.felipe694@gmail.com>",
      subject,
      html: body,
    });
  }
}
