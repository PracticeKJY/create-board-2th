import connectDB from "@/util/db"
import { ObjectId } from "mongodb"

const handler = async (req, res) => {
  console.log(req.body)

  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("board")
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) })
      console.log("삭제되었습니다")
      res.redirect(302, "/list")
    } catch (error) {
      console.log(error)
    }

    // res.status(200).json("삭제완료")
  }
}
export default handler
