import React from 'react'
import Link from 'next/link'
import style from './header.module.css';

// import { getServerSession } from "next-auth"
// import { options } from "@/app/api/auth/[...nextauth]/options";
import AuthLinks from './authLinks';

// import "../app/globals.css"

export default async function HeaderMain() {

 
  // console.log("Session lkbkjbkbkb: ", session)
  return (
    <div className={style.headerMainWrapper}>
      <header className={style.headerContainerMain}>
          <Link href="/" className={style.headerLogoMain}>Adventure Guild</Link>
          <nav className={style.headerContainerNav}>
            <Link className={style.navLink}  href="/viewGuildMembers">View Guild</Link>
          <AuthLinks/>
          </nav>
      </header>
    </div>
  )
}

