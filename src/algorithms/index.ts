
const array = [1, 2, 3, 4, 10, 12, 13, 15, 18, 19, 20, 21, 22, 23, 24, 30, 32, 33, 35, 38];

/**
 *
 *  O(n)^2 "quadratic time",  size of the input affects the growth of the algorithm proportionally
 *
 */
function quadratic(number: number) {
    let count = 0;
    for (let i = 0; i < number; i++) {
        for (let x = 0; x < number; x++) {
            count++
            console.log(count);
        }
    }
};

/**
 *
 *  O(n) "linear time",  size of the input affects the growth of the algorithm proportionally
 *
 */

function linear(number: number) {
    for (let x = 0; x < number; x++) {
        console.log(x);
    }
}


function getBaseLog(x: number, y: number) {
    return Math.log(y) / Math.log(x);
}

/**
 *
 *  O(Log n), complexity decreases as input changes
 *
 */
function logarithm(index: number, start = 0, end = array.length, count = 0): void | number {
    count++
    if (count > getBaseLog(2, array.length)) return -1;
    let middle = Math.round((start + end) / 2);
    if (array[middle] === index) return middle
    index > array[middle] ? start = middle++ : end = middle--;
    return logarithm(index, start, end, count);
}