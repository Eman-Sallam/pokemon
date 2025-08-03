export const getIdFromUrl = (url: string): number | undefined => {
  const idStr = url.split('/').filter(Boolean).pop();
  return idStr ? parseInt(idStr, 10) : undefined;
};
