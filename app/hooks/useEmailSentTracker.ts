"use client";

import { useState, useCallback } from "react";

export function useEmailSentTracker() {
  const [hasSentEmail, setHasSentEmail] = useState(false);

  const triggerSendEmail = useCallback((mailtoUrl: string) => {
    window.location.href = mailtoUrl;
    setHasSentEmail(true);
  }, []);

  const resetEmailStatus = useCallback(() => {
    setHasSentEmail(false);
  }, []);

  return {
    hasSentEmail,
    triggerSendEmail,
    resetEmailStatus,
  };
}
