import { Button } from '../button/Button'
import { FinancialEntries } from '../financialEntries/FinancialEntries'
import { FinancialRow } from '../financialRow/FinancialRow'
import styles from '../section/Section.module.scss'
import { SelectedButton } from '../selectButton/SelectedButton'
import useOperationsData from '../../zustand/store'
import ExpectationNotification from '../notifications/expectation/ExpectationNotificatoin'
import PositiveNotification from '../notifications/positiveNotification/PositiveNotification'

export function Section() {
    
    const showExpectationNotification = useOperationsData((state) => state.showExpectation);
    const showPositiveNotification = useOperationsData((state) => state.showPositive);

    return (
        <section className={styles.section}>

            {/* Уведомления о совершении операции. На данный момент здесь только ожидание и успешный вариант. Пока запрос на сервер не отправляется, думаю, достаточно для примера */}
            {showExpectationNotification && <ExpectationNotification />}
            {showPositiveNotification && <PositiveNotification />}

            {/* Блоки с кнопками */}
            <div className={styles.buttonRow}>
                <div className={styles.leftButtonGroup}>
                    <Button className={styles.yearButton} data={2025} />
                    <SelectedButton />
                </div>

                <div className={styles.rightButtonGroup}>
                    <button className={styles.downloadButton} >Загрузить выписку</button>
                    <Button data='Правила' />
                </div>
            </div>

            {/* Вывод данных по финансовым операциям */}
            <FinancialEntries />
            <FinancialRow />
        </section>
    )
}