export function numberFormat(number: number) {
  const formatNumber = new Intl.NumberFormat("en-US");
  return formatNumber.format(number);
}
