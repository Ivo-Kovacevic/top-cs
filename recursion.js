const fibs = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            arr.push(i);
        } else if (i === 1) {
            arr.push(i);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
    return arr;
};

const fibsRec = (num, arr = []) => {
    if (num === arr.length) return arr;
    if (arr.length < 2) {
        arr.push(arr.length);
    } else {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
    return fibsRec(num, arr);
};

console.log(fibsRec(10));
