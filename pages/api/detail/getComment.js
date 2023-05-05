import connectDB from "./../../../util/db"

const handler = async (req, res) => {
  //queryString의 방법일땐, req.query
  // console.log(req.query, "응답바디")

  const query = { parent: req.query.id }

  const db = (await connectDB).db("board")
  const result = await db.collection("comment").find(query).toArray()
  //json으로 result(data)를 전송 함
  res.status(200).json(result)
}

export default handler
