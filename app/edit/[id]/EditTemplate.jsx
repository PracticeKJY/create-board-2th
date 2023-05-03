"use client"

import styles from "./edit.module.css"
const EditTemplate = ({ result }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>수정페이지</h4>
      <form
        className={styles.writeForm}
        action="/api/edit/update"
        method="POST"
      >
        <label className={styles.writeLabel} htmlFor="title">
          제목 :
        </label>
        <input
          className={styles.titleInput}
          id="title"
          name="title"
          type="text"
          defaultValue={result.title}
          placeholder="글제목"
        />
        <label className={styles.writeLabel} htmlFor="content">
          내용 :
        </label>
        <textarea
          className={styles.contentInput}
          id="content"
          name="content"
          defaultValue={result.content}
          placeholder="글내용"
        />
        <input
          style={{ display: "none" }}
          className={styles.titleInput}
          name="_id"
          defaultValue={result._id.toString()}
        />

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.writeButton}>
            작성완료📝
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditTemplate
