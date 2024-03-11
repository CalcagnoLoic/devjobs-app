export const convertWebsiteName = (url: string) => {
  const domain = (url.match(/\/([^\\/]+)\/?$/) || [])[1];
  
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\\/]+)\.com\/([^\\/]+)$/;
  const match = url.match(regex);

  if (match) return `${domain}.com`;
};
