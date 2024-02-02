export const ConvertDateString = date => {
  const x = new Date(date);
  const converted = `${x.getFullYear()}-${x.getMonth()}-${x.getDay() + 1}`;
  return converted;
};
export const formatNumber = number => {
  if (number < 1000) {
    return number.toString();
  } else {
    const formattedNumber = (number / 1000).toFixed(1);
    return `${formattedNumber}k`;
  }
};
export const formatPrice = price => {
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
  return formattedPrice;
};
