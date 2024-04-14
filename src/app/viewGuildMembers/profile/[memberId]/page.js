import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css"

export default function GuildMemberProfile() {
  return (
        <section className={styles.profileWrapper}>
            <h1 className={styles.nameHeader}>Kaldor Ironheart</h1>
            <Image className={styles.profileImage}
                src="/assets/images/guildMemberImages/Kaldor_Ironheart.jpg"
                        width={170}
                        height={170} 
                        alt="Kaldor Ironheart"
            />
            <div className={styles.profileStatsContainerTop}>
                <div className={styles.profileStatsSubContainerTop}>
                    <p className={styles.profileStatsStatistic}>Fighter</p>
                    <h2 className={styles.profileStatsHeader}>Class & Level</h2>
                </div>
                <div className={styles.profileStatsSubContainerTop}>
                    <p className={styles.profileStatsStatistic}>Human</p>
                    <h2 className={styles.profileStatsHeader}>Race</h2>
                </div>
                <div className={styles.profileStatsSubContainerTop}>
                    <p className={styles.profileStatsStatistic}>Chaotic Neutral</p>
                    <h2 className={styles.profileStatsHeader}>Alignment</h2>
                </div>
                <Link className={styles.profileBtnHire} href="/user/hire">Hire Kaldor</Link>
            </div>
            <div className={styles.profileContainerStatsAndBio}>
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
                <div className={styles.profileBiographyContainer}>
                    <p>
                        Kaldor Ironheart hails from the distant mountain kingdom of Durakor, 
                        known for its skilled warriors and formidable fortresses. 
                        From a young age, Kaldor displayed exceptional strength 
                        and prowess in combat. His family, respected blacksmiths 
                        in the kingdom, crafted the finest weapons and armor, 
                        instilling a deep appreciation for craftsmanship in Kaldor.
                    </p>
                    <p>
                        Kaldor Ironheart hails from the distant mountain kingdom of 
                        Durakor, known for its skilled warriors and formidable 
                        fortresses. From a young age, Kaldor displayed exceptional 
                        strength and prowess in combat. His family, respected 
                        blacksmiths in the kingdom, crafted the finest weapons 
                        and armor, instilling a deep appreciation for craftsmanship 
                        in Kaldor.
                    </p>
                    <p>
                        During his travels, Kaldor learned of an ancient artifact, 
                        a legendary sword said to be hidden in the heart of a perilous 
                        dungeon. Driven by the desire for glory and to prove his 
                        worth, Kaldor set out on a quest to find the sword and 
                        write his own legend.
                    </p>
                </div>
            </div>
            <div className={styles.profileProficienciesContainer}>
                <h2 >Proficiencies</h2>
                <div className={styles.profileProficienciesListsContainer}>
                    <div>
                        <h3>Armor</h3>
                        <ul className={styles.profileProficienciesList}>
                            <li>All Armor</li>
                            <li>All Shields</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Weapons</h3>
                        <ul className={styles.profileProficienciesList}>
                            <li>Simple Weapons</li>
                            <li>Martial Weapons</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <ul className={styles.profileProficienciesList}>
                            <li>None</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Saving Throws</h3>
                        <ul className={styles.profileProficienciesList}>
                            <li>Strength</li>
                            <li>Constitution</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bio--ability-scores-wrapper'>
                <div className={styles.profileAbilityScoresContainer}>
                    <Image
                        src="/assets/icons/20-sided-dice.svg"
                        width={40}
                        height={40} 
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
            <div>
                <Link className={styles.profileBtnHire} href="/">Hire Kaldor</Link>
                <Link className={styles.profileBtnReturn} href="/">Return To Guild</Link>
            </div>
        </section>
  )
}
