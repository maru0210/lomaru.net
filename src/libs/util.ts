export const cn = (...c: (string | boolean)[]) => {
  return c.filter((v) => v).join(" ");
};

export const formatDate = (dateStr?: string) => {
  const date = new Date(dateStr ?? 0);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
