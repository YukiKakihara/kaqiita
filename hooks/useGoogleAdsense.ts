import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

export const useGoogleAdsense = (): void => {
  const isNotProduction = process.env.ENV !== 'production';

  if (isNotProduction) return;

  const { asPath } = useRouter();

  const loadAd = useCallback(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const component = window.document
        .getElementById('__next')
        .querySelector(`.adsbygoogle`);

      if (component) {
        component.addEventListener('load', loadAd);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        const component = window.document
          .getElementById('__next')
          .querySelector(`.adsbygoogle`);

        if (component) {
          component.removeEventListener('load', loadAd);
        }
      }
    };
  }, [asPath]);
};
