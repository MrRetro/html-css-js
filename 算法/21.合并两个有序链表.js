/**
 * @author caijianjia
 * @date 2021-10-20 17:30
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

let preL1 = new ListNode(2)
let l1 = new ListNode(1, preL1)

let preL2 = new ListNode(6)
let l2 = new ListNode(5, preL2)

console.log(JSON.stringify(mergeTwoLists(l1, l2)))
