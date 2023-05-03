"use client"

import Link from "next/link"
import styles from "./Board.module.css"
import { useRouter } from "next/navigation"

//삭제
//삭제버튼을 누르면 서버로 삭제해달라고 요청
//뭘로 찾아서 삭제해달라할거임?
//id로 비교해서 안에있는 걸 삭제 deleteOne()일까?
//form 말고 onclick으로 하자

const Board = ({ id, title, content }) => {
  const router = useRouter()

  const onClick = () => {
    fetch("/api/list/delete", {
      method: "POST",
      body: id,
    }).then((result) => {
      console.log(result)
      router.push("/list")
    })
  }

  return (
    <li className={styles.listItem} key={id}>
      <Link href={`/detail/${id}`} className={styles.listItemContainer}>
        <h4>{title}</h4>
        <p>{content}</p>
      </Link>
      <div>
        <Link href={`/edit/${id}`} className={styles.editButton}>
          수정하기📝
        </Link>
        <button className={styles.deleteButton} onClick={onClick}>
          삭제❌
        </button>
      </div>
    </li>
  )
}

export default Board
