'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import style from './header.module.css';


export default function AuthLinks() {
    const {data: session}  = useSession();
  return (
    <>
        {session?.user ?  <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                          : 
                          <ul className={style.headerFlexColumn}>
                            <li><Link className={style.navLink} href="/signin">Sign In</Link></li>
                            <li><Link className={style.navLinkCTA} href="/register">Register</Link></li>
                        </ul>
          }

    </>
  )
}
