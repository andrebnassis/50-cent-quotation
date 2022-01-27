export const isNumber = (data: number): boolean => {
    if (typeof data === 'number' && (data || data === 0)) {
        return true;
    }
    return false;
};

export const toCurrencyFormat = (value:number):string => {
    return `R$ ${value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`
}