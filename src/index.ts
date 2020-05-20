import 'reflect-metadata'
import * as model from './typegoose'
// import * as model from './typeorm'

async function run() {
  await model.setup()
  await model.reset()

  const user = await model.createUser({
    firstName: 'Cahil',
    surname: 'Foley',
    username: 'cahil.foley',
  })
  console.log(user)

  const project = await model.createProject({
    name: 'Passport WebCore',
    coverage: 0.111,
    createdBy: user,
    repoURL: 'http://',
    isBuiltAutomatically: true,
    isTestedAutomatically: true,
    isDeployedAutomatically: false,
  })
  console.log(project)

  const comment = await model.addCommentToProject(
    project,
    user,
    'This is an awesome project'
  )
  console.log(comment)

  console.log(await model.getUserByUsername('cahil.foley'))
}

run().catch(console.error)
