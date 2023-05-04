import connectDB from "@/util/db"
import bcrypt from "bcrypt"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10)
    req.body.password = hash

    const db = (await connectDB).db("board")
    const result = await db.collection("post").insertOne(req.body)
    console.log(result)
    res.redirect(302, "/")
  }
}
export default handler
