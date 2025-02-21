import { useState } from 'react';
import useOperationsData from '../../zustand/store'
import Modal from '../modal/Modal';
import { FinancialRowData } from './financialRowData/FinancialRowData'


export function FinancialRow() {
    const data = useOperationsData((state) => state.data)
    const showModal = useOperationsData((state) => state.showModal);
    
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleRowClick = (index) => {
        setSelectedIndex(index);
    }

    return (
        <>
            {
                data.map((item, index) => (
                    <div key={index} onClick={() => handleRowClick(index)} >
                        <FinancialRowData index={index} data={item} />
                    </div>
                ))
            }
            {showModal && <Modal selectedIndex={selectedIndex} />}
        </>
    )
}