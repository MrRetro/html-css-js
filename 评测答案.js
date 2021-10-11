
document.querySelector('div').onclick = function(e) {
    var $target = e.target;
    if ($target.tagName.toLowerCase() === 'p') {
        var index = [...this.children].findIndex(item => item === $target);
        alert(index);
    }
}

var $pList = document.querySelectorAll('div p');
    var onClickEvent = function(index) {
    return function() {
        alert(index);
    };
};
for (var i = 0; i < $pList.length; i++) {
    $pList[i].onclick = onClickEvent(i);
}



var findNthNumber = function(array, n) {
    return array.sort((a, b) => a - b)[n - 1];
}


var findNthNumber = function(array, n) {
    return partition(array, n, 0, array.length - 1);
}
var partition = function(nums, n, start, end) {
    var i = start;
    var j = end;
    var flag = nums[start];
    while(start < end) {
        while(start < end && nums[end] >= flag) {
            end--;
        }
        swap(nums, start, end); 
        while(start < end && nums[start] <= flag) {
            start++;
        }
        swap(nums, start, end);
    }
    if (start === n) return flag;
    if (start > n) return partition(nums, n, i, start - 1); 
    return partition(nums, n, start + 1, j); 
}
var swap = function(array, i, j) {
    var temp = array[j];
    array[j] = array[i];array[i] = temp;
}

var poll = function(time = 1000) {
    if (!sendRequest()) {
        return setTimeout(poll, time, time * 1.5);
    }
}