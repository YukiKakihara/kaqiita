import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from 'utils/gtag';
import { isProduction } from 'utils/isProduction';

export const useGoogleAnalytics = (): void => {
  if (!isProduction) return;

  const { events } = useRouter();

  const handleRouteChange = (url: string): void => {
    pageview(url);
  };

  useEffect(() => {
    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);
};
