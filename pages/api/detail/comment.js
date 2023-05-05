import connectDB from "@/util/db"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
  req.body = JSON.parse(req.body)
  // console.log(req.body)

  const data = {
    parent: new ObjectId(req.body.parent),
    author: req.body.author,
    comment: req.body.comment,
  }

  if (req.method === "POST") {
    const db = (await connectDB).db("board")
    const result = await db.collection("comment").insertOne(req.body)
    res.status(200).json()
  }
}

export default handler
