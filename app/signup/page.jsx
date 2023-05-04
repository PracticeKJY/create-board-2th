import styles from "./page.module.css"
const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <form
        className={styles.signupForm}
        action="/api/auth/signup"
        method="POST"
      >
        <label htmlFor="name">이름</label>
        <input id="name" name="name" type="text" placeholder="이름" />
        <label htmlFor="email">이메일</label>
        <input id="email" name="email" type="email" placeholder="이메일" />
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="패스워드"
        />
        <button className={styles.signupButton}>가입하기</button>
      </form>
    </div>
  )
}

export default Signup
