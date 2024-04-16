'user client'
import {useEffect, useRef } from 'react'
import style from '../header.module.css';
import Link from 'next/link';

export default function SettingsDropdown({closeMenu, userName, userEmail}) {
    let dropdownRef = useRef();

    const handleClickOutside = (event) => {
        if (!dropdownRef.current.contains(event.target)){
            event.stopPropagation();
            closeMenu();
        }
    }
    
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        document.body.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
          document.body.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <div ref={dropdownRef} className={style.userIconDropdownWrapper}> 
            <div className={style.userIconDropdown}>
                <div className={style.dropdownInnerSection}>
                    <h2>Account</h2>
                    <div className={style.userInfoContainer}>
                        <div className={style.userInfoIcon}>T</div>
                        <div className={style.userInfoTextContainer}>
                            <p className={style.usernameText}>{userName}</p>
                            <p className={style.emailText}>{userEmail}</p>
                        </div>
                    </div>
                </div>
                <div className={style.dropdownInnerSection}>
                    <Link className={style.signOutButton} href="/api/auth/signout?callbackUrl=/">Logout</Link>
                </div>
            </div>
        </div> 
    )
}
