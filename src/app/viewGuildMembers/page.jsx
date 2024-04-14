// 'use server'
import styles from "./page.module.css"
import GuildMemberSmall from './components/guildMemberSmall'
import { guildMemberData } from "./members";

export default async function ViewGuildMembers() {
    const renderGuildMembers = () => {
        return guildMemberData.map(member => {
            console.log(member)
            return <GuildMemberSmall key={member.name} memberData={member}/>
        }
    )
}
    return (
        <div className="right-side-inner-wrapper">
            <h1 className='page-title-text' >GUILD MEMBERS</h1>
            <div className={styles.guildMembersContainer}>
                {renderGuildMembers()}
            </div>
        </div>
  )
}
