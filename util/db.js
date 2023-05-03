import { MongoClient } from "mongodb"

//이렇게 담아두면 한번만 실행해도 여러곳에서 DB정보를 불러올 수 있음
const url =
  "mongodb+srv://admin:12341234@codingapple.qs8kvrl.mongodb.net/board?retryWrites=true&w=majority"
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export default connectDB
