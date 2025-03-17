"use client";

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

export default function I18nProvider({ children }) {
  useEffect(() => {
    // This ensures i18next is initialized on the client side
    if (typeof window !== 'undefined') {
      // You can add any client-side specific i18n setup here
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 