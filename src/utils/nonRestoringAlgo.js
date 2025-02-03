export function binoutHelper(num, left) {
    if (left === 0) return "";
    return binoutHelper(num >> 1, left - 1) + (num & 1);
}

export function binout(num, bits) {
    return binoutHelper(num, bits);
}

export function nonRestoringDivision(dividend, divisor) {
    let A = 0;
    let Q = dividend;
    let M = divisor;
    let maxBits = Math.max(dividend.toString(2).length, divisor.toString(2).length);
    let steps = [];
    let prevA = 0;

    for (let i = maxBits - 1; i >= 0; i--) {
        let AQ = (A << maxBits) + Q;
        AQ <<= 1;
        A = (AQ >> maxBits) & ((1 << maxBits) - 1);
        Q = AQ & ((1 << maxBits) - 1);
        let operation = "Shift Left";
        let quotientBit = "_";

        if (prevA & (1 << (maxBits - 1))) {
            A += M;
            operation = "A = A + M";
        } else {
            A -= M;
            operation = "A = A - M";
        }

        prevA = A;
        if (A & (1 << (maxBits - 1))) {
            Q &= ~1;
            quotientBit = "0";
        } else {
            Q |= 1;
            quotientBit = "1";
        }
        steps.push({ N: i, M: binout(M, maxBits), A: binout(A, maxBits), Q: binout(Q, maxBits), QuotientBit: quotientBit, Operation: operation });
    }
    
    // Restoration step if remainder is negative
    if (A & (1 << (maxBits - 1))) {
        A += M;
        steps.push({ N: "Restoration", M: binout(M, maxBits), A: binout(A, maxBits), Q: binout(Q, maxBits), QuotientBit: "", Operation: "Restoring A" });
    }

    return steps;
}