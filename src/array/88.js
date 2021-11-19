
/**
 * 88. 合并两个有序数组
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge = function(nums1, m, nums2, n) {
    
    const result = []

    let i = 0
    let j = 0

    while(i < m || j < n) {
        if(j >= n || (i < m && nums1[i] <= nums2[j])) {
            result.push(nums1[i])
            i++
        }else {
            result.push(nums2[j])
            j++
        }
    }

    for(let t =0;t<m+n;t++) {
        nums1[t] = result[t]
    }
};