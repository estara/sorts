function bubbleSort(arr) {
    for (let i = arr.length-1; i >= 0; i--) {
        let j = 0;
        while (j <= i-1) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            j++
        }
    }
    return arr;
}

module.exports = bubbleSort;