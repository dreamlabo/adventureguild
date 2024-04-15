import Link from 'next/link';
import styles from '../[memberId]/page.module.css'

export default function ButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
        <Link className={styles.profileBtnHire} href="/">Hire Kaldor</Link>
        <Link className={styles.profileBtnReturn} href="/">Return To Guild</Link>
    </div>
  )
}
