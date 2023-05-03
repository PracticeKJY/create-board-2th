import connectDB from "@/util/db"
import { ObjectId } from "mongodb"
import DetailTemplate from "./DetailTemplate"

const Detail = async (props) => {
  const db = (await connectDB).db("board")
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) })

  const toStringResult = JSON.parse(JSON.stringify(result))

  return <DetailTemplate result={toStringResult} />
}

export default Detail
