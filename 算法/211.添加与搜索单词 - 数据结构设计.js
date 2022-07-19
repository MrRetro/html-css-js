/**
 * @author caijianjia
 * @date 2021-10-19 09:34
 */
// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
//
// 实现词典类 WordDictionary ：
//
// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
//  
//
// 示例：
//
// 输入：
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
//     [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// 输出：
// [null,null,null,null,false,true,true,true]
//
// 解释：
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
//
//
// 提示：
//
// 1 <= word.length <= 500
// addWord 中的 word 由小写英文字母组成
// search 中的 word 由 '.' 或小写英文字母组成
// 最多调用 50000 次 addWord 和 search

//构造函数
var WordDictionary = function() {
    // 按字符串长度来作为key存入map中，相同字数的放同一组
    this.map={}
};

//add函数
WordDictionary.prototype.addWord = function(word) {
    let len=word.length
    if(this.map[len]==undefined)
        this.map[len]=[word]
    else
        this.map[len].push(word)
};

//搜索函数
WordDictionary.prototype.search = function(word) {
    let len = word.length
    var re = new RegExp("^"+word.replace(".","\\w")+"$");
    if(this.map[len]==undefined)
        return false

    for(var i=0;i<this.map[len].length;i++){
        if(re.test(this.map[len][i])){
            return true
        }
    }
    return false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// let arr = new WordDictionary(["bad","dad","mad"])
// let testArr = [["pad"],["bad"],[".ad"],["b.."]]
let arr = new WordDictionary(["a"])
let testArr = [["."]]
testArr.forEach(v => {

    // console.log(v[0])
    console.log(arr.search(v[0]))
})

