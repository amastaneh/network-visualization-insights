const getRandomNumbers = (num, min, max, variance) => {
    if (variance < 0) {
        throw new Error('Variance must be non-negative.');
    }

    const result = [];
    // Generate the first number within the range.
    let current = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(current);

    // Generate the rest of the numbers based on variance.
    for (let i = 1; i < num; i++) {
        // Calculate the random adjustment within the variance range.
        let adjustment = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        // Adjust the current number by the random adjustment.
        current += adjustment;
        // Ensure the new number is within the min and max bounds.
        current = Math.min(Math.max(current, min), max);
        result.push(current);
    }

    return result;
};

export const generalHelper = {
    getRandomNumbers,
};

