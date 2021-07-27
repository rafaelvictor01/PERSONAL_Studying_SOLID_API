import { IMailMessage } from './IMailMessage'

/**
 * @author rafaelvictor01
 * Define o "contrato" para o envio de emails
 */
export interface IMailProvider {
  sendMail(message: IMailMessage): Promise<void>
}