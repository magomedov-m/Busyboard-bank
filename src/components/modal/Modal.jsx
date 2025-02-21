import React, { useRef, useState } from 'react'
import styles from '../modal/Modal.module.scss'
import { IoMdClose } from "react-icons/io";
import useOperationsData from '../../zustand/store';
import { useClickAway } from 'use-click-away'

export default function Modal(selectedIndex) {
    const setShowModal = useOperationsData((state) => state.setShowModal);
    const setShowExpectationNtf = useOperationsData((state) => state.toggleExpectationNotification);
    const showPositiveNtf = useOperationsData((state) => state.togglePositiveNotification);

    const infoOperationUpdate = useOperationsData((state) => state.updateInfoOperation);
    
    const handleClickSave = (index) => {
        setShowExpectationNtf();
        
        setTimeout(() => {
            setShowExpectationNtf()
            showPositiveNtf();
            infoOperationUpdate(index);
        }, 2000);
    }

    // Преобразование числа из строки в number
    const totalAmountString = useOperationsData((state) => state.totalAmount);
    function parseNumber(totalAmountString) {
        const cleanedInput = totalAmountString.replace(/\s/g, '').replace(',', '.');

        const number = parseFloat(cleanedInput);
        return number;
    }
    const totalAmount = parseNumber(totalAmountString);

    // Используются два стейта для отслеживания состояния в полях input'ов
    const [profit, setProfit] = useState(0);
    const [transfer, setTransfer] = useState(0);

    const handleProfit = (e) => {
        const newProfit = parseFloat(e.target.value);
        setProfit(newProfit);
        setTransfer(totalAmount - newProfit);
    }

    const handleTransfer = (e) => {
        const newTransfer = parseFloat(e.target.value);
        setTransfer(newTransfer);
        setProfit(totalAmount - newTransfer);
    }

    // При клике вокруг модального окна, оно закрывается
    const clickRef = useRef(null);

    useClickAway(clickRef, () => {
        setShowModal();
    })

  return (
            <div className={styles.modal} ref={clickRef}>
            <button className={styles.closeBtn} onClick={setShowModal}><IoMdClose /></button>
            <h3 className={styles.paymentDetails}>Детализация платежа</h3>

            <div className={styles.financialOperationInfo}>
                
                <div className={styles.billingInfo}>
                    
                    <div className={styles.totalAmount}>
                        <p>Общая сумма платежа</p>
                        <input className={styles.input} type="number" placeholder={totalAmount} disabled={true} />
                    </div>
    
                    <div className={styles.spread}>
                        <p>Осталось разнести</p>
                        <input className={styles.input} type="number" placeholder='0' />
                    </div>
    
                </div>
    
                <div className={styles.typeOperation}>
                    <div className={styles.amount}>
                        <p>Сумма</p>
                        <input className={styles.inputSumm} type="number" placeholder='Введите сумму оплаты' />
                    </div>
    
                    <div className={styles.type}>
                        <p>Тип операции</p>
                        <input className={styles.inputType} type="number" onChange={handleProfit} value={profit ? profit : ''} placeholder={!profit ? 'Вывод чистой прибыли' : ''} />
                    </div>
                </div>
    
                <div className={styles.paymentInfo}>
                    <div className={styles.amount}>
                        <p>Сумма</p>
                        <input className={styles.inputSumm} type="number" placeholder='Введите сумму оплаты' />
                    </div>
    
                    <div className={styles.type}>
                        <p>Тип операции</p>
                        <input className={styles.inputType} type="number" onChange={handleTransfer} value={transfer ? transfer : ''} placeholder={!transfer ? 'Перенос в кассу' : ''} />
                    </div>
    
                    <div className={styles.type}>
                        <p>Касса получателя</p>
                        <input className={styles.inputType} type="number" placeholder='Касса получателя'/>
                    </div>
    
                </div>
    
            </div>
    
            <div className={styles.buttons}>
                <button className={styles.safeBtn} onClick={() => handleClickSave(selectedIndex.selectedIndex)} disabled={!profit && !transfer ? true : false} >Сохранить</button>
                <button className={styles.cancel} onClick={setShowModal}>Отменить</button>
            </div>
        </div>
  )
}