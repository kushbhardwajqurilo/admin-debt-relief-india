export function formatIndianNumber(num) {
  const str = num?.toString();
  let lastThree = str?.slice(-3);
  const otherNumbers = str?.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  return otherNumbers?.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}
