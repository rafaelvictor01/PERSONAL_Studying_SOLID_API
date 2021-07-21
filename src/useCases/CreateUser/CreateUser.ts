import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO'

export class CreateUserUserCase {
  
  constructor(
    private userRepository: IUsersRepository
  ) {}
  
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists')
    }
    
    const user = new User(data)
  }
}
