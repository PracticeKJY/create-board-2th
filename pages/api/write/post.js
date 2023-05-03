import { connectDB } from "@/util/db"

const handler = async (req, res) => {
  console.log(req.body)

  if (req.method === "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목써라")
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
