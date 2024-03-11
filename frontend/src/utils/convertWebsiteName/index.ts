export const convertWebsiteName = (url: string, website: string) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\\/]+)\.com\/([^\\/]+)$/;
  const match = url.match(regex);

  if (match) return `${website}.com`;
};
