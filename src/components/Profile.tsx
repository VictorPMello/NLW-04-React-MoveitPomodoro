import styles from '../style/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/VictorPMello.png" alt="Victor Mello"/>
            <div>
                <strong>Victor Mello</strong>
                <p>
                    <img src="icons/Level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}