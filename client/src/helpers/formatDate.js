export const formatDate = (getDate) => new Date(getDate).toLocaleDateString('en-IN',
  { timeZone: 'IST', month: "short", day: "2-digit", year: "numeric", hour: '2-digit', minute: '2-digit' },
)