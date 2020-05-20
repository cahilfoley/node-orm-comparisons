import { arrayProp, getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Project } from './Project'
import { Comment } from './Comment'

export class User {
  @prop()
  firstName: string

  @prop()
  surname: string

  @prop({ index: true, unique: true })
  username: string

  @arrayProp({ ref: 'Project' })
  projects?: Ref<Project[]>

  @arrayProp({ ref: 'Comment' })
  comments?: Ref<Comment[]>
}

export const UserModel = getModelForClass(User)
