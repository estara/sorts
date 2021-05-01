function merge(arr1, arr2) {
    let result = [];
    let arr1Idx = 0;
    let arr2Idx = 0;
    while (arr1Idx <= arr1.length-1 && arr2Idx <= arr2.length-1){
        if (arr1[arr1Idx] <= arr2[arr2Idx]) {
            result.push(arr1[arr1Idx]);
            arr1Idx += 1;
        } else {
            result.push(arr2[arr2Idx]);
            arr2Idx += 1;
        }
    }
    while (arr1Idx <= arr1.length-1) {
        result.push(arr1[arr1Idx]);
        arr1Idx += 1;
    }
    while (arr2Idx <= arr2.length-1) {
        result.push(arr2[arr2Idx]);
        arr2Idx += 1;
    }
    return result;
}

function mergeSort(arr) {
    const idx = Math.floor(arr.length / 2);

    if (arr.length < 2) {
        return arr
    }
    const left = arr.splice(0, idx);
    return merge(mergeSort(left), mergeSort(arr))
    
}

module.exports = { merge, mergeSort};