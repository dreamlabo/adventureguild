import React from 'react'
import Link from 'next/link'
import style from './header.module.css';

// import "../app/globals.css"

export default function HeaderMain() {
  return (
    <div className={style.headerMainWrapper}>
      <header className={style.headerContainerMain}>
          <Link href="/" className={style.headerLogoMain}>Adventure Guild</Link>
          <nav className={style.headerContainerNav}>
              <ul className={style.headerFlexColumn}>
                  <li><Link className={style.navLink} href="/signin">Sign In</Link></li>
                  <li><Link className={style.navLink} href="/register">Register</Link></li>
                  {/* <li><Link className={style.navLink} href="/user">User</Link></li> */}
              </ul>
          </nav>
      </header>
    </div>
  )
}

