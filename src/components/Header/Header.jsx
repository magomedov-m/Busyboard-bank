import styles from '../Header/Header.module.scss'
import UserIcon from '../../img/user logo.svg'
import '../../fonts/Gilroy-ExtraBold.otf'

export function Header() {
    return (
        <header className={styles.header}>

            <nav className={styles.navigation}>

                <div className={styles.logo}>Busyboard</div>

                <p className={styles.navItem}>Дашборд</p>
                <p className={styles.navItem}>Аналитика</p>
                <p className={styles.navItem}>Финансы</p>
                <p className={styles.navItem}>Автоматизация</p>
            </nav>

            <div className={styles.userProfile}>
                <div className={styles.userInfo}>
                    <p className={styles.userName}>User Name</p>

                    <img src={UserIcon} alt="Иконка юзера" />
                
                </div>
            </div>
        </header>
    )
}