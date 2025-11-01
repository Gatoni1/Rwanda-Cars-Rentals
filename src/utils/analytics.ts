import ReactGA from 'react-ga4';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

let gaInitialized = false;

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  // Guard against placeholder IDs and only initialize in production builds
  const isProduction = import.meta.env.MODE === 'production';
  const isPlaceholder = measurementId === 'G-XXXXXXXXXX';
  if (isProduction && measurementId && !isPlaceholder) {
    ReactGA.initialize(measurementId);
    gaInitialized = true;
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (!gaInitialized) return;
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Initialize Sentry for error tracking
export const initSentry = () => {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (dsn) {
    Sentry.init({
      dsn,
      integrations: [new BrowserTracing() as any],
      tracesSampleRate: 1.0,
      environment: import.meta.env.MODE
    });
  }
};

// Log error to Sentry
export const logError = (error: Error, context?: Record<string, any>) => {
  Sentry.captureException(error, { extra: context });
};