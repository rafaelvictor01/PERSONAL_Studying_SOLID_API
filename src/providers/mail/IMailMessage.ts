import { IMailAddress } from './IMailAddress'

export interface IMailMessage {
  to: IMailAddress
  from: IMailAddress
  subject: string
  body: string
}