"use client"

import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import styles from "./LoginButton.module.css"

export const LoginButton = () => {
  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        signIn()
      }}
    >
      로그인
    </button>
  )
}
export const LogoutButton = () => {
  return (
    <button
      className={styles.logoutButton}
      onClick={() => {
        signOut()
      }}
    >
      로그아웃
    </button>
  )
}
export const SignupButton = () => {
  const router = useRouter()
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
