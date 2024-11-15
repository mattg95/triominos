import { create } from 'zustand';

const useStore = create((set) => ({
  // Initial state
  state: {},

  // Method to set or update a key-value pair
  setKeyValue: (key, value) =>
    set((state) => ({
      state: { ...state.state, [key]: value },
    })),

  // Method to delete a key
  deleteKey: (key) =>
    set((state) => {
      const newState = { ...state.state };
      delete newState[key];
      return { state: newState };
    }),
}));

export default useStore;
