interface Window {
  adsbygoogle: { [key: string]: unknown }[];
  gtag: Gtag.Gtag;
  prerenderReady: boolean;
}

declare global {
  var window: Window;
}
