import Image from "next/image"
import Link from "next/link"

import boardLogo from "../../../public/boardLogo.svg"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.navBar}>
        <Link href="/">
          <Image priority={true} src={boardLogo} alt="로고" />
        </Link>
        <ul className={styles.navList}>
          <HeaderList href={"/"} text={"Home"} />
          <HeaderList href={"/list"} text={"목록"} />
          <HeaderList href={"/write"} text={"글쓰기"} />
        </ul>
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
