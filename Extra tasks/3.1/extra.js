"use strict"


// 1)

const maxSum = (arr) => {

    let sum = 0,
        result = 0;


    arr.forEach((i) => {
        sum = sum + i;
        if (sum > result) result = sum;
        if (sum < 0) sum = 0;
    });

    return result;
};

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
