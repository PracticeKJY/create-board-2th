import Image from "next/image"
import styles from "./page.module.css"
import connectDB from "@/util/db"

export default async function Home() {
  const db = (await connectDB).db("board")
  const result = await db.collection("post").find().toArray()

  return <></>
}
