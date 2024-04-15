import Image from 'next/image';
import styles from '../[memberId]/page.module.css'

export default function ProfileImage({height, width}) {
  return (
    <Image className={styles.profileImage}
            src="/assets/images/guildMemberImages/Kaldor_Ironheart.jpg"
            width={width}
            height={height} 
            alt="Kaldor Ironheart"
    />
  )
}
