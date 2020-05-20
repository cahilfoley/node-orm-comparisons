import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { Project } from './Project'
import { User } from './User'

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Project, (project) => project.comments)
  project: Project

  @Column()
  content: string

  @CreateDateColumn()
  createdOn: Date

  @ManyToOne((type) => User, (user) => user.createdProjects)
  createdBy: User
}
