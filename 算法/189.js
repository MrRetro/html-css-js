/**
 * @author caijianjia
 * @date 2021-09-18 10:43
 */
// 189. 旋转数组
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//
//  
//
// 进阶：
//
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    const subLen = len - k
    const start = nums.slice(subLen, len)
    const end = nums.slice(0, subLen)
    return [...start, ...end]
};

const nums = [1,2,3,4,5,6,7]
const k = 3
console.log(rotate(nums, k))
