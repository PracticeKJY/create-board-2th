import Image from "next/image"
import styles from "./page.module.css"
import connectDB from "@/util/db"

export default async function Home() {
  const db = (await connectDB).db("board")
  const result = await db.collection("post").find().toArray()

  let name = "Update 중입니다.💪"
  return (
    <>
      <div>
        <h2 className={styles.title}>홈화면🏡</h2>
        <p className={styles.titleSub}>
          {" "}
          <del>{name}</del>
        </p>
      </div>
    </>
  )
}
