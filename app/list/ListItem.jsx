"use client"

import styles from "./ListItem.module.css"
import Board from "./Board"
const ListItem = ({ result }) => {
  return (
    <>
      {result.map((item, i) => (
        <div className={styles.listContainer} key={i}>
          <ul className={styles.listBg}>
            <Board id={item._id} title={item.title} content={item.content} />
          </ul>
        </div>
      ))}
    </>
  )
}

export default ListItem
