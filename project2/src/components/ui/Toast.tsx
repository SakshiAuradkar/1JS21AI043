import React, { useEffect } from 'react';
import useToastStore from '@/store/ToastStore'; // Ensure this path is correct

const colourVariants = {
  error: "alert-error",
  success: "alert-success",
  warning: "alert-warning",
  info: "alert-info",
};

const Toast = () => {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    const timers = toasts.map((toast) => 
      setTimeout(() => {
        removeToast(toast.id);
      }, 5000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [toasts, removeToast]);

  return (
    <div className="toast">
      {toasts.map((toast) => (
        <div key={toast.id} className={`alert ${colourVariants[toast.type]}`}>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

export default Toast;
