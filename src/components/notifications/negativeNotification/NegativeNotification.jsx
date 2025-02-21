import React, { useState } from 'react'
import styles from './NegativeNotification.module.scss';
import { IoMdClose } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
 
export default function NegativeNotification() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(false);
    }
  return (
    <>
        {
            show && <div className={styles.negativeNotification}>
            <div className={styles.iconBlock} onClick={handleClick}><PiWarningCircle className={styles.warning} /></div>
            <div className={styles.saveChanged}>
                <p>Ошибка <IoMdClose className={styles.close} /></p>
                <p>Ошибка</p>
            </div>
        </div>
        }
    </>
  )
}
