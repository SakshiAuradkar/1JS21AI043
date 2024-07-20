// src/types.ts

export interface Toast {
    id: number;
    type: 'error' | 'success' | 'warning' | 'info';
    message: string;
  }
  
  export interface ToastState {
    toasts: Toast[];
    addToast: (toast: Toast) => void;
    removeToast: (id: number) => void;
  }
  