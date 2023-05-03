"use client"

import { useRouter } from "next/navigation"
import styles from "./write.module.css"

const Write = () => {
  //서버를 통해,
  //1. 글 작성 템플릿을 찍고
  //2. 전송버튼 누르면 서버에 글 저장 요청하고
  //3. 서버를 통해 검사 후, DB에 저장

  //서버?
  //클라이언트에선 url, method로 요청
  //서버에선 req,res 으로 전송

  const router = useRouter()

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>글작성</h4>
      <form className={styles.writeForm} action="/api/write/post" method="POST">
        <label className={styles.writeLabel} htmlFor="title">
          제목 :
        </label>
        <input
          className={styles.titleInput}
          id="title"
          name="title"
          type="text"
          placeholder="글제목"
        />
        <label className={styles.writeLabel} htmlFor="content">
          내용 :
        </label>
        <textarea
          className={styles.contentInput}
          id="content"
          name="content"
          placeholder="글내용"
        />
        <div className={styles.buttonContainer}>
          <button className={styles.writeButton}>작성완료📝</button>
          <button
            className={styles.writeButton}
            type="button"
            onClick={() => {
              router.back()
            }}
          >
            취소❌
          </button>
        </div>
      </form>
    </div>
  )
}

export default Write
