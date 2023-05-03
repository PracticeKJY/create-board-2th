import connectDB from "@/util/db"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
  console.log(req.body._id)
  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("board")
      const result = await db.collection("post").updateOne(
        { _id: new ObjectId(req.body._id) },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        },
      )

      res.redirect(302, "/list")
    } catch (error) {
      console.log(error)
    }
  }
}
export default handler
