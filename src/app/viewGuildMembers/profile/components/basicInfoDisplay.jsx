
import styles from '../[memberId]/page.module.css'
import Link from 'next/link';

export default function BasicInfoDisplay({showButton}) {
  return (
    <div className={styles.profileStatsContainerTop}>
        <div className={styles.profileStatsSubContainerTop}>
            <div className={styles.classLevelContainer}>
              <p className={styles.profileStatsStatistic}>Barbarian</p>
              <p className={styles.profileStatsStatistic}>3rd</p>
            </div>
            <h2 className={styles.profileStatsHeader}>Class & Level</h2>
        </div>
        <div className={styles.profileStatsSubContainerTop}>
            <p className={styles.profileStatsStatistic}>Dragonborn</p>
            <h2 className={styles.profileStatsHeader}>Race</h2>
        </div>
        <div className={styles.profileStatsSubContainerTop}>
            <p className={styles.profileStatsStatistic}>Chaotic Neutral</p>
            <h2 className={styles.profileStatsHeader}>Alignment</h2>
        </div>
        {showButton &&  <Link className={styles.profileBtnHire} href="/user/hire">Hire Kaldor</Link>}
    </div>
  )
}
