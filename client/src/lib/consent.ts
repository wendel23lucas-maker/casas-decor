/*
 * Consentimento de cookies/analytics (LGPD).
 * Enquanto o visitante não decidir, nenhum dado de analytics é coletado
 * (opt-in, não opt-out) — é a postura mais segura do ponto de vista legal.
 */

export type ConsentValue = "accepted" | "rejected";

const STORAGE_KEY = "casasdecor-cookie-consent";
const CONSENT_EVENT = "casasdecor-consent-changed";

export function getConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistir
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function onConsentChange(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}
