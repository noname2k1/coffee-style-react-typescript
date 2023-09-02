const formatCurrency = (
    value: number,
    currency: string = 'USD',
    locale: string = 'en-US',
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
};

export default formatCurrency;
