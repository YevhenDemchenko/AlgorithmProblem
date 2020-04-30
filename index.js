function attempt(available, allowed, preferred) {
    let allowedArray = [];
    let resultArray = [];

    allowed.indexOf('any') === -1
        ? allowedArray = available.filter(e => allowed.indexOf(e) !== -1)
        : allowedArray = available;

    if (!!allowedArray.length && !!preferred.length) {
        if (preferred.indexOf('any') === -1) {
            for (const e of preferred) {
                let preferredArray = allowedArray.filter(n => n >= e);
                !preferredArray.length ? resultArray.push(allowedArray[allowedArray.length - 1])
                    : resultArray.push(preferredArray[0]);
            }
        } else resultArray = allowedArray;
    }

    return [... new Set(resultArray)];
}
