import styles from '../financialEntries/FinancialEntries.module.scss'
import {ReactComponent as Icon} from '../../img/icon.svg'

export function FinancialEntries() {
    return (
        <>
        <article className={styles.entriesHeader}>

            <div className={styles.date}>
                <p>ДАТА</p>
                <Icon />
            </div>

            <div className={styles.coming}>
                <p>ПРИХОД</p>
            </div>

            <div className={styles.expenditure}>
                <p>РАСХОД</p>
            </div>

            <div className={styles.bank}>
                <div className={styles.bankContainer}>
                    <p>БАНК</p>
                    <Icon />
                </div>
            </div>

            <div className={styles.counterparty}>
                <p>КОНТРАГЕНТ</p>
                <Icon />
            </div>

            <div className={styles.article}>
                <p>СТАТЬЯ</p>
                <Icon />
            </div>

            <div className={styles.description}>
                <p>ОПИСАНИЕ</p>
            </div>

        </article>
        <hr className={styles.separator} />
        </>
    )
}