import { IMailMessage } from '../IMailMessage'
import { IMailProvider } from '../IMailProvider'
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'bd94977ddf59da',
        pass: '871f3a654fccc3'
      }
    })
  }
  
  async sendMail(message: IMailMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body
    })
  }
}