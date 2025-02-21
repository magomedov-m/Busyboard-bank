import { create } from 'zustand'

const useOperationsData = create((set) => ({
  // Добавление всех элементов из бд в глобальное хранилище
  data: [],
  addItems: (item) => set((state) => ({ data: [...state.data, ...item] })),
  // Отображение модального окна
  showModal: false,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),
  // Общая сумма для детализации платежа
  totalAmount: 0,
  updateTotalAmount: (amount) => set((state) => ({ totalAmount: amount })),
  // Отображение мини-модальных окон в зависимости от статуса ответа сервера
  showExpectation: false,
  toggleExpectationNotification: () => set((state) => ({ showExpectation: !state.showExpectation })),

  showPositive: false,
  togglePositiveNotification: () => set((state) => ({ showPositive: !state.showPositive })),

  // Хранение информации о выполнении или невыполнении сохранения
  infoOperation: new Set(),
  updateInfoOperation: (id) => set((state) => {
    const newInfoOperation = new Set(state.infoOperation);
    newInfoOperation.add(id);
    return { infoOperation: newInfoOperation }
  }),

  // Сохранение id тех элементов, которые успешно сохранены
  safeDone: new Set(),
  addSafeDone: (id) => set((state) => {
    const newSafeDone = new Set(state.safeDone);
    newSafeDone.add(id);
    return { safeDone: newSafeDone };
  }),
}))

export default useOperationsData;