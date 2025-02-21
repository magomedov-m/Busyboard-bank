import useOperationsData from "../zustand/store";


const data = [{
    id: 0,
    date: "10.01.2025",
    income: "999 999 000,00",
    expense: "999 999 000,00",
    bank: "Точка",
    counterparty: "Общество с ограниченной ответственностью 'Интернет Решения'",
    article: "Вывод ЧП",
    description: "Отчет за период Отчет за период период Отчет за период период..."
},
{
    id: 1,
    date: "10.01.2025",
    income: "999 999 000,00",        
    expense: "999 999 000,00",
    bank: "Точка",
    counterparty: "Общество с ограниченной ответственностью 'Интернет Решения'",
    article: "Вывод ЧП",
    description: "Отчет за период Отчет за период период Отчет за период период..."
},
{
    id: 2,
    date: "10.01.2025",
    income: "999 999 000,00",
    expense: "999 999 000,00",
    bank: "Точка",
    counterparty: "Общество с ограниченной ответственностью 'Интернет Решения'",
    article: "Вывод ЧП",
    description: "Отчет за период Отчет за период период Отчет за период период..."
}];

const addItems = useOperationsData.getState().addItems;
addItems(data)

export default data;