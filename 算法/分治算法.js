// array = [3,2,1] n = 1
var findNthNumber = function(array, n) {
    return partition(array, n, 0, array.length - 1);
}
var partition = function(nums, n, start, end) {
    var i = start; // 0
    var j = end; // 2
    // 选择的对比的元素，比 flag 小的元素放左边，比 flag 大的元素放右边
    var flag = nums[start]; // flag = 3
    while(start < end) {
        while(start < end && nums[end] >= flag) {
            // 先遍历右侧元素，所有大于 flag 的元素先不动
            end--;
        }
        swap(nums, start, end); // 此时，右侧元素 nums[j] 已经小于 flag 了，进行交换一次
        while(start < end && nums[start] <= flag) {
            // 遍历左侧元素，所有小于 flag 的元素不动
            start++; // 1->2
        }
        swap(nums, start, end); // 交换一下当前的两个位置不对的数字
    }
    if (start === n) return flag;
    if (start > n) return partition(nums, n, i, start - 1); // 递归左侧
    return partition(nums, n, start + 1, j); // 递归右侧
}
// 交换数组中的 i 和 j 下标的两个元素
var swap = function(array, i, j) {
    var temp = array[j];
    array[j] = array[i];array[i] = temp;
}