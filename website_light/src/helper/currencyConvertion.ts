export function formatDollars(amount: number) {
    if (amount >= 1000000000000) {
        return (amount / 1000000000000).toFixed(2) + 'T $';
    } else if (amount >= 1000000000) {
        return (amount / 1000000000).toFixed(2) + 'B $';
    } else if (amount >= 1000000) {
        return (amount / 1000000).toFixed(2) + 'M $';
    } else {
        return amount.toFixed(2) + '$';
    }
}

