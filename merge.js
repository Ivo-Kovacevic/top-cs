function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
    result = [];
    if (leftArr[0] >= rightArr[0]) {
        return result.push(rightArr[0], leftArr[0]);
    } else {
        return result.push(leftArr[0], rightArr[0]);
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
