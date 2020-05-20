import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Project } from './Project'
import { Comment } from './Comment'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  surname: string

  @Column()
  username: string

  @OneToMany((type) => Project, (project) => project.createdBy)
  createdProjects?: Project[]

  @OneToMany((type) => Comment, (comment) => comment.createdBy)
  comments?: Comment[]
}
