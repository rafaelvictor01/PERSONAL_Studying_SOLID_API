import { Response } from 'express';
import { CreateUser } from './CreateUser'
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO';

export class CreateUserController {

  constructor(
    private createUser: CreateUser 
  ) {}
  
  async handle(req: ICreateUserRequestDTO, res: Response): Promise<Response> {
    try {
      this.createUser.execute(req)
      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message || 'Unexpected error' }).send()
    }
  }
}