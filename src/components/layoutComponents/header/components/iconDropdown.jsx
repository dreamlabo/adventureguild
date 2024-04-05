'user client'
import { useState } from 'react'
import style from '../header.module.css';
import SettingsDropdown from './settingsDropdown';

export default function IconDropdown() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const closeMenu = () => {
    setIsButtonActive(false);
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
        <span>T</span>
      </button>
      {isButtonActive && <SettingsDropdown closeMenu={closeMenu}/>}           
    </div>
  )
}
