import { ObjectId } from "mongodb"
import styles from "./edit.module.css"
import EditTemplate from "./EditTemplate"
import connectDB from "@/util/db"

const Edit = async (props) => {
  const db = (await connectDB).db("board")
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) })

  const toStringResult = JSON.parse(JSON.stringify(result))

  return <EditTemplate result={toStringResult} />
}

export default Edit
