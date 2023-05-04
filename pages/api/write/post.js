import connectDB from "@/util/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

const handler = async (req, res) => {
  let session = await getServerSession(req, res, authOptions)

  if (session) {
    req.body.author = session.user.email
  }

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 적어주세요")
    }
    try {
      const db = (await connectDB).db("board")
      const result = db.collection("post").insertOne(req.body)
      res.redirect(302, "/list")
    } catch (error) {
      console.log(error)
    }
  }
}

export default handler
