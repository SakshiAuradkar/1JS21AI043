// src/store/ToastStore.ts

import { create } from 'zustand';
import { Toast, ToastState } from '../types'; // Adjust the path as needed

const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (toast: Toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),
  removeToast: (id: number) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

export default useToastStore;
