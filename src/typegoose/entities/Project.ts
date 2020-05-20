import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import { User } from './User'

export class Project {
  @prop({ index: true, unique: true })
  name: string

  @prop({ default: new Date() })
  createdOn?: Date

  @prop({ ref: 'User' })
  createdBy: Ref<User>

  @prop()
  repoURL: string

  @prop({ default: false })
  isBuiltAutomatically?: boolean

  @prop({ default: false })
  isTestedAutomatically?: boolean

  @prop({ default: false })
  isDeployedAutomatically?: boolean

  @prop({ default: 0 })
  coverage: number
}

export const ProjectModel = getModelForClass(Project)
