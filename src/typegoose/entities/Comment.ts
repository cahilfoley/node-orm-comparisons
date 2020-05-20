import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { Project } from './Project'
import { User } from './User'

export class Comment {
  @prop({ ref: 'Project' })
  project: Ref<Project>

  @prop()
  content: string

  @prop({ default: () => new Date() })
  createdOn: Date

  @prop({ ref: 'User' })
  createdBy: Ref<User>
}

export const CommentModel = getModelForClass(Comment)
