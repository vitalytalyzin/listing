export const getPriceWithCurrency = (price, currency_code) => {
  let currentPrice;
  switch (currency_code) {
    case "USD":
      currentPrice = `$${price}`;
      break;
    case "EUR":
      currentPrice = `€${price}`;
      break;
    default:
      currentPrice = `${price} ${currency_code}`;
  }

  return currentPrice;
};
