import Image from "next/image"
import Link from "next/link"

import boardLogo from "../../../public/boardLogo.svg"

import styles from "./Header.module.css"
import { LoginButton, LogoutButton, SignupButton } from "./LoginButton"
import { getServerSession } from "next-auth"
import { authOptions } from "./../../../pages/api/auth/[...nextauth]"
const Header = async () => {
  const session = await getServerSession(authOptions)

  return (
    <header>
      <div className={styles.navBar}>
        <Link href="/">
          <Image priority={true} src={boardLogo} alt="로고" />
        </Link>
        {session ? (
          <>
            <ul className={styles.navList}>
              <HeaderList href={"/"} text={"Home"} />
              <HeaderList href={"/list"} text={"목록"} />
              <HeaderList href={"/write"} text={"글쓰기"} />
            </ul>
            <div>
              <span>{session.user.name}님 환영합니다</span>
              <LogoutButton />
            </div>
          </>
        ) : (
          <>
            <ul className={styles.navList}>
              <HeaderList href={"/"} text={"Home"} />
            </ul>
            <div>
              <LoginButton />
              <SignupButton />
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header

const HeaderList = ({ href, text }) => {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  )
}
