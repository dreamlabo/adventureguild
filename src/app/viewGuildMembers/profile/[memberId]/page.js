import Image from 'next/image';
import Link from 'next/link';

export default function GuildMemberProfile() {
  return (
        <section className='bio--main-wrapper'>
            <h1>Kaldor Ironheart</h1>
            <Image className='bio-image'
                src="/assets/images/guildMemberImages/Kaldor_Ironheart.jpg"
                        width={170}
                        height={170} 
            />
            <div className='bio-stats-one'>
                <div className='bio--stats-sub-container'>
                    <p className='bio--stats-statistic'>Fighter</p>
                    <h2 className='bio--stats-header'>Class & Level</h2>
                </div>
                <div className='bio--stats-sub-container'>
                    <p className='bio--stats-statistic'>Human</p>
                    <h2 className='bio--stats-header'>Race</h2>
                </div>
                <div className='bio--stats-sub-container'>
                    <p className='bio--stats-statistic'>Chaotic Neutral</p>
                    <h2 className='bio--stats-header'>Alignment</h2>
                </div>
                <Link className="btn-hire" href="/user/hire">Hire Kaldor</Link>
            </div>
            <div className='bio--container--stats-and-bio'>
                <div className='bio--stats-numerical-container'>
                    <div>
                        <p className='bio--stats-statistic'>12</p>
                        <h2 className='bio--stats-header'>Armor Class</h2>
                    </div>
                    <div>
                        <p className='bio--stats-statistic' >18</p>
                        <h2 className='bio--stats-header'>Hit Points</h2>
                    </div>
                    <div>
                        <p className='bio--stats-statistic'>450</p>
                        <h2 className='bio--stats-header'>Exp Points</h2>
                    </div>
                    <div>
                        <p className='bio--stats-statistic'>45</p>
                        <h2 className='bio--stats-header'>Speed</h2>
                    </div>
                </div>
                <div className='bio--biography-container'>
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
            <div className='bio--proficiencies-container'>
                <h2 >Proficiencies</h2>
                <div className='bio--proficiencies-lists-container'>
                    <div>
                        <h3>Armor</h3>
                        <ul className='bio--proficiencies-list'>
                            <li>All Armor</li>
                            <li>All Shields</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Weapons</h3>
                        <ul className='bio--proficiencies-list'>
                            <li>Simple Weapons</li>
                            <li>Martial Weapons</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <ul className='bio--proficiencies-list'>
                            <li>None</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Saving Throws</h3>
                        <ul className='bio--proficiencies-list'>
                            <li>Strength</li>
                            <li>Constitution</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bio--ability-scores-wrapper'>
                <div className='bio--ability-scores-container'>
                    <Image className='icon--20-sided-dice'
                            src="/images/icons/20-sided-dice.svg"
                            width={40}
                            height={40} 
                    />
                    <h2 className='bio--ability-scores-header'>Ability Scores</h2>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>14</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Strength</h3>
                            <p className='bio--ability-score-modifier'>+4</p>
                        </div>
                    </div>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>16</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Dexterity</h3>
                            <p className='bio--ability-score-modifier'>+3</p>
                        </div>
                    </div>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>11</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Constitution</h3>
                            <p className='bio--ability-score-modifier'>+3</p>
                        </div>
                    </div>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>13</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Intelligence</h3>
                            <p className='bio--ability-score-modifier'>+3</p>
                        </div>
                    </div>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>16</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Wisdom</h3>
                            <p className='bio--ability-score-modifier'>+3</p>
                        </div>
                    </div>
                    <div className='bio--ability-score-container'>
                        <p className='bio--ability-score'>13</p>
                        <div>
                            <h3 className='bio--ability-score-header'>Charisma</h3>
                            <p className='bio--ability-score-modifier'>+3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link className="bio--btn-hire" href="/">Hire Kaldor</Link>
                <Link className="bio--btn-return" href="/">Return To Guild</Link>
            </div>
        </section>
  )
}
