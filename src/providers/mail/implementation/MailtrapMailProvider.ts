import { IMailMessage } from '../IMailMessage'
import { IMailProvider } from '../IMailProvider'
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter;
  
  constructor() {
    this.transporter = nodemailer.createTransport({})
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
