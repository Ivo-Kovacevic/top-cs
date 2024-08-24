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
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
