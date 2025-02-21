import React from 'react'
import styles from './PositiveNotification.module.scss';
import { IoMdClose } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import useOperationsData from '../../../zustand/store';

 
export default function PositiveNotification() {
  // Получение функции для переключения состояния уведомления
  const togglePositiveNotification = useOperationsData((state) => state.togglePositiveNotification)
  return (
    <div className={styles.notification}>
        <div className={styles.iconContainer}><CiCircleCheck className={styles.successIcon} /></div>
        <div className={styles.content}>
            <p className={styles.savedChanges}>Сохранение изменений <IoMdClose className={styles.closeIcon} onClick={() => togglePositiveNotification()} /></p>
            <p className={styles.fixedInfo}>Перевод успешно зафиксирован</p>
        </div>
    </div>
  )
}
