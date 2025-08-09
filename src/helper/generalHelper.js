const getRandomNumbers = (num, min, max, variance) => {
    if (variance < 0) {
        throw new Error('Variance must be non-negative.');
    }

    const result = [];
    let current = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(current);

    for (let i = 1; i < num; i++) {
        let adjustment = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        current += adjustment;
        current = Math.min(Math.max(current, min), max);
        result.push(current);
    }

    return result;
};

export const generalHelper = {
    getRandomNumbers,
};