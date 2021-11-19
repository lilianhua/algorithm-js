/**
 * 26. 删除有序数组中的重复项
 * @param {*} nums 
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let n = 0
    for(let i=0;i<nums.length;i++) {
        if(i === 0 || nums[i] !== nums[i-1]) {
            nums[n] = nums[i]
            n++
        }
    }
    return n
};