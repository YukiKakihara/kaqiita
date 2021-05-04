export const formattedDate = (datetimeStr: string): string => {
  if (!datetimeStr) return '';

  const date = new Date(datetimeStr);

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
