
/**
 * 283. 移动零
 * @param {*} nums 
 */
var moveZeroes = function(nums) {
    let n = 0

    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== 0) {
            nums[n] = nums[i]
            n++
        }
    }

    while(n < nums.length) {
        nums[n] = 0
        n++
    }

    return nums
};