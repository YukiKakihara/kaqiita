export const pageview = (url: string) => {
  window.gtag('config', 'UA-129782494-2', {
    page_path: url,
  });
};
