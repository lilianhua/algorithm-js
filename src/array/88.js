/**
 * 88. 合并两个有序数组
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 */
var merge = function (nums1, m, nums2, n) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < m || j < n) {
    if (j >= n || (i < m && nums1[i] <= nums2[j])) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  for (let t = 0; t < m + n; t++) {
    nums1[t] = result[t];
  }
};

var merge2 = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;

  for (let k = m + n - 1; k >= 0; k--) {
    if (j < 0 || (i >= 0 && nums1[i] >= nums2[j])) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
};
