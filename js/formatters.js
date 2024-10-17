export const percentFormatter = new Intl.NumberFormat('ru-RU', {style: 'percent', maximumfractionDigits:3});
export const priceFormatter = new Intl.NumberFormat('ru-RU', {
style: 'currency',
currency: 'RUB',
maximumFractionDigits: 2,
});