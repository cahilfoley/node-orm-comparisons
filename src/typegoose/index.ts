import { getConnection } from './connection'
import {
  CommentModel,
  User,
  UserModel,
  ProjectModel,
  Project,
} from './entities'

export async function setup() {
  await getConnection()
}

export async function reset() {
  await ProjectModel.remove({})
  await UserModel.remove({})
}

export async function createUser(info: User) {
  return await new UserModel(info).save()
}

export async function updateUser(id: string, update: Partial<User>) {
  return await UserModel.findByIdAndUpdate(id, update)
}

export async function getUserByID(id: string) {
  return await UserModel.findById(id)
}

export async function getUserByUsername(username: string) {
  return await UserModel.findOne({ username })
}

export async function deleteUserByID(id: string) {
  return await UserModel.findByIdAndDelete(id)
}

export async function createProject(project: Project) {
  return await new ProjectModel(project).save()
}

export async function updateProject(id: string, update: Partial<Project>) {
  return await ProjectModel.findByIdAndUpdate(id, update)
}

export async function getProjectByID(id: string) {
  return await ProjectModel.findById(id)
}

export async function deleteProjectByID(id: string) {
  return await ProjectModel.findByIdAndDelete(id)
}

export async function addCommentToProject(
  project: Project,
  author: User,
  content: string
) {
  const comment = new CommentModel()
  comment.project = project
  comment.createdBy = author
  comment.content = content
  return await comment.save()
}
