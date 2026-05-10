"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

type ToastType = "success" | "error" | "default";
type Toast = { id: number; message: string; type: ToastType };
type ToastContextValue = {
  toast: (message: string, type?: ToastType) => void;
  success: (message: string) => void;
  error: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue>({
  toast: () => undefined,
  success: () => undefined,
  error: () => undefined,
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((items) => items.filter((item) => item.id !== id));
  }, []);

  const toast = useCallback((message: string, type: ToastType = "default") => {
    const id = Date.now();
    setToasts((items) => [...items, { id, message, type }]);
    window.setTimeout(() => removeToast(id), 4000);
  }, [removeToast]);

  const success = useCallback((message: string) => toast(message, "success"), [toast]);
  const error = useCallback((message: string) => toast(message, "error"), [toast]);

  const value = useMemo(() => ({ toast, success, error }), [toast, success, error]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex w-[calc(100%-3rem)] max-w-sm flex-col gap-3">
        {toasts.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-3 rounded-xl border p-4 shadow-2xl transition-all animate-in slide-in-from-right-full ${
              item.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : item.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-white border-blue-100 text-slate-800"
            }`}
          >
            {item.type === "success" && <CheckCircle2 className="mt-0.5 shrink-0 text-green-600" size={18} />}
            {item.type === "error" && <AlertCircle className="mt-0.5 shrink-0 text-red-600" size={18} />}
            
            <div className="flex-1 text-sm font-semibold leading-relaxed">
              {item.message}
            </div>

            <button
              onClick={() => removeToast(item.id)}
              className="mt-0.5 shrink-0 opacity-50 hover:opacity-100 transition-opacity"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function Toaster() {
  return null;
}
