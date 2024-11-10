export function getFormattedDate(date) {
  const day = date.toLocaleString('en-US', { day: '2-digit' }); // day of month, 2 digits with leading zeros
  const month = date.getMonth() + 1; // full month name
  const year = date.getFullYear(); // full year (e.g., 2023)
  return `${day}-${month}-${year}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
