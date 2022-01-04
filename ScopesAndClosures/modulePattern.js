
// var twoSum = function (nums, target) {
//     let numMap = {}
//     let result
//     nums.forEach((element, i) => {
//         numMap[i] = element
//     });

//     nums.forEach((num, i) => {
//         let targetValue = target - num
//         for (let k in numMap) {
//             if (numMap[k] === targetValue && k != i) {

//                 result = [i, +k]
//                 break
//             }
//         }

//     })

//     return result
// };



const twoSum = (nums, target) => {
    let mapOfNumbers = new Map();
    let twoIndexes = [];

    for (let i = 0; i < nums.length; i++) {
        mapOfNumbers.set(nums[i], i)
    }

    nums.forEach((num, i) => {
        let targetValue = target - num;
        if (mapOfNumbers.get(targetValue) && mapOfNumbers.get(targetValue) !== i) {
            twoIndexes = [i, mapOfNumbers.get(targetValue)]
        }
    });


    return twoIndexes;
}
console.log(twoSum([2, 5, 5, 11], 10))


let tesMap = new Map()
tesMap.set( "a", {from: 24, to: 90})

let res = tesMap.get("a")
console.log(res.from)