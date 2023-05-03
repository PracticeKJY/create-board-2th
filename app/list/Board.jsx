"use client"

import Link from "next/link"
import styles from "./Board.module.css"

const Board = ({ id, title, content }) => {
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
      </div>
    </li>
  )
}

export default Board
