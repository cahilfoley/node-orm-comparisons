import { connect, Mongoose } from 'mongoose'

let connection: Promise<Mongoose>

export async function getConnection() {
  if (!connection) {
    connection = connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: 'test',
    })
  }

  return await connection
}
