import { getConnection } from './connection'
import { User, Project, Comment } from './entities'

export async function setup() {
  await getConnection()
}

export async function reset() {
  await Comment.delete({})
  await Project.delete({})
  await User.delete({})
}

type UserData = Pick<User, 'firstName' | 'surname' | 'username'>

export async function createUser(info: UserData) {
  const user = new User()
  Object.assign(user, info)
  return await user.save()
}

export async function updateUser(id: string, update: Partial<UserData>) {
  const user = await User.findOne(id)
  Object.assign(user, update)
  return await user.save()
}

export async function getUserByID(id: string) {
  return await User.findOne(id)
}

export async function getUserByUsername(username: string) {
  return await User.findOne({ where: { username } })
}

export async function deleteUserByID(id: string) {
  return await User.delete(id)
}

type ProjectData = Pick<
  Project,
  | 'name'
  | 'coverage'
  | 'createdBy'
  | 'isBuiltAutomatically'
  | 'isDeployedAutomatically'
  | 'isTestedAutomatically'
  | 'repoURL'
>

export async function createProject(info: ProjectData) {
  const project = new Project()
  Object.assign(project, info)
  return await project.save()
}

export async function updateProject(id: string, update: Partial<ProjectData>) {
  const project = await Project.findOne(id)
  Object.assign(project, update)
  return await project.save()
}

export async function getProjectByID(id: string) {
  return await Project.findOne(id, { relations: ['comments'] })
}

export async function deleteProjectByID(id: string) {
  return await Project.delete(id)
}

export async function addCommentToProject(
  project: Project,
  author: User,
  content: string
) {
  const comment = new Comment()
  comment.project = project
  comment.createdBy = author
  comment.content = content
  return await comment.save()
}
