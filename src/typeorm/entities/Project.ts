import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { User } from './User'
import { Comment } from './Comment'

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  repoURL: string

  @Column()
  isBuiltAutomatically: boolean

  @Column()
  isTestedAutomatically: boolean

  @Column()
  isDeployedAutomatically: boolean

  @Column()
  coverage: number

  @OneToMany((type) => Comment, (comment) => comment.project)
  comments: Comment[]

  @CreateDateColumn()
  createdOn: Date

  @ManyToOne((type) => User, (user) => user.createdProjects)
  createdBy: User
}
