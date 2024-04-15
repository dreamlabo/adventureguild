import styles from '../[memberId]/page.module.css'

export default function Proficiencies() {
  return (
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
  )
}
