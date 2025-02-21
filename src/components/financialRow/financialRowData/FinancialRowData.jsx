import styles from '../financialRowData/FinancialRowData.module.scss'
import { useState } from 'react'
import useOperationsData from '../../../zustand/store'
import { BsChatSquareText } from "react-icons/bs";


export function FinancialRowData({ index, data }) {

    const [showBtn, setShowBtn] = useState(false);
    const setShowModal = useOperationsData((state) => state.setShowModal);
    const updateTotalAmount = useOperationsData((state) => state.updateTotalAmount);

    const pushSafeId = useOperationsData((state) => state.addSafeDone)
    const safeId = useOperationsData((state) => state.safeDone);

    const handleIconClick = () => {
        pushSafeId(index);
        updateTotalAmount(data.income);
        setShowModal();
    }
    
    console.log('safeId: ', safeId)
    const infoOperation = useOperationsData((state) => state.infoOperation)

    return (
        <>
        <div className={styles.rowData}>
            <div className={styles.date}><p>{data.date}</p></div>
            <div className={styles.amount}><p>{data.income}</p></div>
            <div className={styles.expense}><p>{data.expense}</p></div>
            <div className={styles.bank}><p>{data.bank}</p></div>
            <div className={styles.counterparty}><p>{data.counterparty}</p></div>
            <div className={styles.article}>
                <button onClick={() => setShowBtn(!showBtn)}><p>{data.article}</p></button>

                {showBtn && (
                    <button onClick={handleIconClick} className={`${styles.btn} ${safeId.has(index) && infoOperation.has(index) ? styles.btnInfo : ''}`} >
                        <BsChatSquareText className={styles.icon} alt="" />
                    </button>
                )}
            </div>
            <div className={styles.description}><p>{data.description}</p></div>
        </div>
        </>
    )
}