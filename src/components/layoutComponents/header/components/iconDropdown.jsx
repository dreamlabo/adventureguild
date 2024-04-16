'user client'
import { useState } from 'react'
import style from '../header.module.css';
import SettingsDropdown from './settingsDropdown';

import { useSession } from 'next-auth/react'


export default function IconDropdown() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const {data: session}  = useSession();

  const closeMenu = () => {
    setIsButtonActive(false);
  }

  const getUserInitial = () => {

  }

  const handleClick = (event) => {
    event.stopPropagation();
    setIsButtonActive(!isButtonActive)
  }

  return (
    <div className={style.iconButtonContainer}>
      <button title="profile and settings" 
              className={style.iconButton}
              onClick={handleClick}>
        <span>{session?.user?.name.charAt(0).toUpperCase()}</span>
      </button>
      {isButtonActive && <SettingsDropdown 
                            closeMenu={closeMenu}
                            userEmail={session?.user?.email}
                            userName={session?.user?.name}/>}           
    </div>
  )
}
