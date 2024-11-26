export const formatAsDollars = (price: string | number) => {
  const dollarAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price) / 100);
  return dollarAmount;
};
