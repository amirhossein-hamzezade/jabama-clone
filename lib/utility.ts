export const formatPrice = (price: number): string => {
  const englishFormatted = price.toLocaleString("en-US");

  return englishFormatted.replace(/,/g, "٬");
};
