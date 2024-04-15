import React from 'react'
import styles from '../[memberId]/page.module.css'

export default function BasicNumericalInfoDisplay() {
  return (
    <div className={styles.profileStatsNumericalContainer}>
        <div>
            <p className={styles.profileStatsStatistic}>12</p>
            <h2 className={styles.profileStatsHeader}>Armor Class</h2>
        </div>
        <div>
            <p className={styles.profileStatsStatistic} >18</p>
            <h2 className={styles.profileStatsHeader}>Hit Points</h2>
        </div>
        <div>
            <p className={styles.profileStatsStatistic}>450</p>
            <h2 className={styles.profileStatsHeader}>Exp Points</h2>
        </div>
        <div>
            <p className={styles.profileStatsStatistic}>45</p>
            <h2 className={styles.profileStatsHeader}>Speed</h2>
        </div>
    </div>
  )
}
