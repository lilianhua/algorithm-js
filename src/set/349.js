/**
 * 349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    return [...new Set(nums1)].filter(n => {
        return nums2.indexOf(n) !== -1
    })
};

const r = intersection([1, 2, 2, 1], [2, 2])
const r2 = intersection([4, 9, 5], [9, 4, 9, 8, 4])
console.log('r=', r)
console.log('r2=', r2)
