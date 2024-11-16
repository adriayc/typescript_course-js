// FUNCTIONS - OPTIONAL PARAMETERS
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
