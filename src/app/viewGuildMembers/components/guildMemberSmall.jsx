import { AiFillStar } from "react-icons/ai";
import Image from 'next/image'
import Link from 'next/link';
import styles from "../page.module.css"

export default function GuildMemberSmall({memberData}) {

  return (
        <div className={styles.indGuildMemberContainer}>
        <div>
            <Image
                src={memberData.imageLink}
                    width={70}
                    height={70} 
                    alt={memberData.name}
            />
        </div>
        <div className={styles.innerContainer}>
            <div className={styles.guildMemberNameContainer}>
                <h2>{memberData.name}</h2>
                <div className={styles.starsContainer}>
                    <AiFillStar size={16} style={{color: "#BB883A"}}/>
                    <AiFillStar size={16} style={{color: "#BB883A"}}/>
                    <AiFillStar size={16} style={{color: "#BB883A"}}/>
                    <AiFillStar size={16} style={{color: "#BB883A"}}/>
                    <AiFillStar size={16} style={{color: "#BBBBBB"}}/>
                </div>
            </div>
            <div className={styles.innerGrid}>
                <div>
                    <h4>Class</h4>
                    <p>{memberData.class}</p>
                </div>
                <div>
                    <h4>Level</h4>
                    <p>{memberData.level}</p>
                </div>
                <div>
                    <h4>Race</h4>
                    <p>{memberData.race}</p>
                </div>
                <div>
                    <h4>Alignment</h4>
                    <p>{memberData.alignment}</p>
                </div>
                <div>
                    <h4>EXP Points</h4>
                    <p>{memberData.experiencePoints.toLocaleString()}</p>
                </div>
                <div>
                    <h4>Armor Class</h4>
                    <p>{memberData.armorClass}</p>
                </div>
                <Link className={styles.btnFullProfile} href="/viewGuildMembers/profile/123">Full Profile</Link>
            </div>
        </div>
    </div>
  )
}
