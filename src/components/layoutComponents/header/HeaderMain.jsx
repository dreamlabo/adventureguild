import React from 'react'
import Link from 'next/link'
import style from './header.module.css';

import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";
import AuthLinks from './authLinks';

// import "../app/globals.css"

export default async function HeaderMain() {

  const session = await getServerSession(options);
  console.log("Session lkbkjbkbkb: ", session)
  return (
    <div className={style.headerMainWrapper}>
      <header className={style.headerContainerMain}>
          <Link href="/" className={style.headerLogoMain}>Adventure Guild</Link>
          <nav className={style.headerContainerNav}>
          <AuthLinks/>
          </nav>
      </header>
    </div>
  )
}

