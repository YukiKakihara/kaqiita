export const pageviewLogToGA = (url: string): void => {
  window.gtag('config', 'UA-129782494-2', {
    page_path: url,
  });
};

export const clickLogToGA = (
  category: string,
  label: string,
  value?: number
): void => {
  window.gtag('event', 'click', {
    event_category: category,
    event_label: label,
    value: value || 1,
  });
};
