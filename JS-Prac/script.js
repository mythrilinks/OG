function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([-300, -100, -200]));