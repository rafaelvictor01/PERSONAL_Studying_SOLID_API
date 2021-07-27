import { IMailMessage } from './IMailMessage'

/**
 * @author rafaelvictor01
 * @return
 * - Define o formato daquilo que a aplicação precisa para fazer o envio de emails.
 * - Não importa o que será usado de recurso externo para fazer o envio de emails.
 * A aplicação entende apenas que algum "sendMail" existe.
 */
export interface IMailProvider {
  sendMail(message: IMailMessage): Promise<void>
}