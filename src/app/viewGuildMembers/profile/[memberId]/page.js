import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css"
import ButtonContainer from '../components/buttonContainer';
import BasicInfoDisplay from '../components/basicInfoDisplay';
import Proficiencies from '../components/proficiencies';
import BasicNumericalInfoDisplay from '../components/basicNumericalInfoDisplay';
import Biography from '../components/biography';
import AbilityScores from '../components/abilityScores';
import ProfileImage from '../components/profileImage';

export default function GuildMemberProfile() {
  return (
        <section className={styles.profileWrapper}>

            <div className={styles.fullScreenLayout}>
                <div className={styles.nameContainer}>
                    <h1 className={styles.nameHeader}>Kaldor Ironheart</h1>
                    <div className={styles.showButtonContainerInHeader}>
                        <ButtonContainer/>
                    </div>
                </div>
                <div className={styles.displayMainStatsFullScreen}>
                    <BasicInfoDisplay showButton={false}/>
                </div>
                <div className={styles.fullScreenGridLayout}>
                    <div>
                        <AbilityScores/>
                    </div>
                    <div>
                        <ProfileImage width={300} height={300}/>
                        <Proficiencies/>
                    </div>
                    <div>
                        <BasicNumericalInfoDisplay/>
                        <Biography/>
                    </div>
                </div>
            </div>

            <div className={styles.tabletLayout}>
                <div className={styles.nameContainer}>
                    <h1 className={styles.nameHeader}>Kaldor Ironheart</h1>
                    <div className={styles.showButtonContainerInHeader}>
                        <ButtonContainer/>
                    </div>
                </div>
                <div className={styles.tabletLayoutGridLayout}>
                    <div>
                        <ProfileImage width={250} height={250}/>
                        <AbilityScores/>
                    </div>
                    <div>
                        <BasicInfoDisplay showButton={false}/>
                        <BasicNumericalInfoDisplay/>
                        <Biography/>
                        <Proficiencies/>
                    </div>
                </div>
            </div>

            <div className={styles.mobileLayout}>
                <div className={styles.nameContainer}>
                    <h1 className={styles.nameHeader}>Kaldor Ironheart</h1>
                    {/* <div className={styles.showButtonContainerInHeader}>
                        <ButtonContainer/>
                    </div> */}
                </div>

                {/* <div className={styles.displayMainStatsFullScreen}>
                    <BasicInfoDisplay showButton={false}/>
                </div> */}
                <div className={styles.imageAndBasicInfoWrapper}>
                    <ProfileImage width={150} height={150}/>
                    <BasicInfoDisplay showButton={true}/>
                </div>

                <div className={styles.displayMainStatsMobile}>
                    <BasicInfoDisplay showButton={true}/>
                </div>
                <div className={styles.profileContainerStatsAndBio}>
                    <BasicNumericalInfoDisplay/>
                    <Biography/>
                </div>
                <Proficiencies/>
                <AbilityScores/>
                {/* <div className={styles.showButtonContainerAtBottom}> */}
                    <ButtonContainer/>
                {/* </div> */}
            </div>
        </section>
  )
}
