"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";

// Local storage key for storing the session ID
export const SESSION_STORAGE_KEY = "aksarify-session-id";
// Local storage key for storing the session expiration time
export const SESSION_EXPIRY_KEY = "aksarify-session-expiry";
// Default session expiration time in milliseconds (24 hours)
export const DEFAULT_EXPIRY_TIME = 24 * 60 * 60 * 1000;

// Hook for managing session state
export function useSessionManager() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Move the session query to the component level
  const existingId =
    typeof window !== "undefined"
      ? window.localStorage.getItem(SESSION_STORAGE_KEY)
      : null;
  const { data: sessionData } = api.session.getSessionById.useQuery(
    { id: existingId ?? "" },
    { enabled: !!existingId },
  );

  // Check if a session is expired
  const isSessionExpired = (): boolean => {
    const expiryTime = window.localStorage.getItem(SESSION_EXPIRY_KEY);
    if (!expiryTime) return true;

    const expiryTimestamp = parseInt(expiryTime, 10);
    return Date.now() > expiryTimestamp;
  };

  // Initialize session from localStorage on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Check if session is expired
      if (isSessionExpired()) {
        clearSession();
        setIsLoading(false);
        return;
      }

      const storedSessionId = window.localStorage.getItem(SESSION_STORAGE_KEY);
      setSessionId(storedSessionId);
      setIsLoading(false);
    }
  }, []);

  // Save session to localStorage
  const saveSession = (id: string, expiryTime = DEFAULT_EXPIRY_TIME) => {
    const expiryTimestamp = Date.now() + expiryTime;
    window.localStorage.setItem(SESSION_STORAGE_KEY, id);
    window.localStorage.setItem(SESSION_EXPIRY_KEY, expiryTimestamp.toString());
    setSessionId(id);
  };

  // Clear session from localStorage
  const clearSession = () => {
    window.localStorage.removeItem(SESSION_STORAGE_KEY);
    window.localStorage.removeItem(SESSION_EXPIRY_KEY);
    setSessionId(null);
  };

  // Redirect to test page with session ID
  const redirectToSession = (id: string) => {
    saveSession(id);
    router.push(`/test/${id}`);
  };

  // Redirect to existing session or return false if none exists
  const redirectToExistingSession = (): boolean => {
    // Check if session is expired
    if (isSessionExpired()) {
      clearSession();
      return false;
    }

    const existingSessionId = window.localStorage.getItem(SESSION_STORAGE_KEY);

    if (existingSessionId && sessionData?.id) {
      router.push(`/test/${sessionData.id}`);
      return true;
    }

    return false;
  };

  return {
    sessionId,
    isLoading,
    saveSession,
    clearSession,
    redirectToSession,
    redirectToExistingSession,
  };
}
