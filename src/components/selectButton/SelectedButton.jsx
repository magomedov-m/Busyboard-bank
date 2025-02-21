import styles from '../selectButton/SelectedButtons.module.scss'
import { useState } from 'react'

export function SelectedButton() {
    const [active, setActive] = useState('');

    return (
        <div className={styles.selectedButtonField}>
            <button className={`${styles.buttonItem} ${active == 'Все статьи' ? styles.active : null}`} onClick={() => setActive('Все статьи')}>Все статьи</button>
            <button className={`${styles.buttonItem} ${active == 'Разнесены' ? styles.active : null}`} onClick={() => setActive('Разнесены')}>Разнесены</button>
            <button className={`${styles.buttonItem} ${active == 'Не разнесены' ? styles.active : null}`} onClick={() => setActive('Не разнесены')}>Не разнесены</button>
        </div>
    )
}