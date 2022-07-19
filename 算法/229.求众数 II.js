/**
 * @author caijianjia
 * @date 2021-10-22 10:42
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let len = nums.length / 3
    let obj = {}
    let arr = []
    nums.forEach(v=>{
        if(obj[v]){
            obj[v]++
        } else {
            obj[v] = 1
        }
    })
    Object.entries(obj).forEach(v=>{
        console.log(v[1], len)
        if(v[1] > len){
            arr.push(v[0])
        }
    })
    return arr
};
console.log(majorityElement([3,2,3]))
