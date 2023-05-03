import connectDB from "@/util/db"
import styles from "./List.module.css"
import ListItem from "./ListItem"

const List = async () => {
  const db = (await connectDB).db("board")
  const result = await db.collection("post").find().toArray()

  const toStringIdResult = result.map((a) => {
    a._id = a._id.toString()
    return a
  })

  return <ListItem result={toStringIdResult} />
}

export default List
