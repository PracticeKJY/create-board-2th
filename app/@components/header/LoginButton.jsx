"use client"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import styles from "./LoginButton.module.css"
import { useEffect } from "react"

export const LoginButton = () => {
  const router = useRouter()

  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        signIn()
        // router.back()
      }}
    >
      로그인
    </button>
  )
}
export const LogoutButton = () => {
  const router = useRouter()
  const onClick = async () => {
    await signOut({
      callbackUrl: "/",
    })
  }

  return (
    <button className={styles.logoutButton} onClick={onClick}>
      로그아웃
    </button>
  )
}
export const SignupButton = () => {
  const router = useRouter()

  //회원가입할때 list페이지에 글하나씩 더 늘어나는 이슈발생
  return (
    <button
      className={styles.signupButton}
      onClick={() => {
        router.push("/signup")
      }}
    >
      회원가입
    </button>
  )
}
