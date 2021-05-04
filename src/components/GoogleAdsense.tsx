import React, { CSSProperties } from 'react';

export type Props = {
  className?: string;
  style?: CSSProperties;
  client: string;
  slot: string;
  layout?: string;
  layoutKey?: string;
  format?: string;
  responsive?: string;
};

export const GoogleAdsense: React.FC<Props> = ({
  className = '',
  style = { display: 'block' },
  format = 'auto',
  layout = '',
  layoutKey = '',
  responsive = 'false',
  client,
  slot,
}) => {
  return (
    <ins
      className={`${className} adsbygoogle`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};
