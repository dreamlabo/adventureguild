import Image from 'next/image';
import styles from '../[memberId]/page.module.css'

export default function AbilityScores() {
  return (
    <div className='bio--ability-scores-wrapper'>
    <div className={styles.profileAbilityScoresContainer}>
        <Image
            src="/assets/icons/20-sided-dice.svg"
            width={35}
            height={35} 
            alt="twenty sided dice"
        />
        <h2 className={styles.profileAbilityScoresHeader}>Ability Scores</h2>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>14</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Strength</h3>
                <p className={styles.profileAbilityScoreModifier}>+4</p>
            </div>
        </div>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>16</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Dexterity</h3>
                <p className={styles.profileAbilityScoreModifier}>+3</p>
            </div>
        </div>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>11</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Constitution</h3>
                <p className={styles.profileAbilityScoreModifier}>+3</p>
            </div>
        </div>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>13</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Intelligence</h3>
                <p className={styles.profileAbilityScoreModifier}>+3</p>
            </div>
        </div>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>16</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Wisdom</h3>
                <p className={styles.profileAbilityScoreModifier}>+3</p>
            </div>
        </div>
        <div className={styles.profileAbilityScoreContainer}>
            <p className={styles.profileAbilityScore}>13</p>
            <div>
                <h3 className={styles.profileAbilityScoreHeader}>Charisma</h3>
                <p className={styles.profileAbilityScoreModifier}>+3</p>
            </div>
        </div>
    </div>
</div>
  )
}
