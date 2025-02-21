import React from 'react'
import styles from './ExpectationNotification.module.scss';
import { IoMdClose } from "react-icons/io";
import { CiTimer } from "react-icons/ci";

 
export default function ExpectationNotification() {
  return (
    <div className={styles.notification}>
        <div className={styles.iconContainer}><CiTimer className={styles.timerIcon} /></div>
        <div className={styles.content}>
            <p className={styles.expectationTitle}>Ожидание <IoMdClose className={styles.closeIcon} /></p>
            <p className={styles.expectationMessage}>Ожидание</p>
        </div>
    </div>
  )
}
