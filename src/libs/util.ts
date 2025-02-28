export const formatDate = (dateStr?: string) => {
  const date = new Date(dateStr ?? 0);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
