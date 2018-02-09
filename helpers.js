export function formatPrice(hours) {
  let divBy, daysYears
  hours > 2920 ? (divBy = 2920) : (divBy = 8)
  hours > 2920 ? (daysYears = 'years') : (daysYears = 'days')
  return `~${(hours / divBy)
    .toFixed(1)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${daysYears}`
}
