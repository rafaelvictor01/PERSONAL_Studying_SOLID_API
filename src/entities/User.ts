import { uuid } from 'uuidv4'

/**
 * @author rafaelvictor01
 * Entidade de usuário da aplicação
 */
export class User {

  public readonly id: string
  public name: string
  public email: string
  public password: string
  
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}