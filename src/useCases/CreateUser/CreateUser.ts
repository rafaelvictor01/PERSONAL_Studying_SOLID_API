import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/mail/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO'

/**
 * @author rafaelvictor01
 * Este único arquivo detém toda a lógica de criação de um usuário. Isto independe de fatores externos.
 */
export class CreateUser {
  
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)
    await this.userRepository.save(user)

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Rafael Victor',
        email: 'rafaelvictor.bernardes@gmail.com'
      },
      subject: 'Seja bem-vindo',
      body: 'Seja bem-vindo'
    })
  }
}
