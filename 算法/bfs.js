/**
 * @author caijianjia
 * @date 2021-01-20 18:11
 */
const data = [
    {
        name: '1',
        children:
            [
                {
                    name: '2',
                    children: [
                        {
                            name: '2-1'
                        }
                    ]
                }
            ]
    },
    {
        name: '1-1',
        children:
            [
                {
                    name: '2-1',
                    children: [
                        {
                            name: '3-1'
                        }
                    ]
                }
            ]
    }
]

// 宽度优先把树形结构平铺
function bfs(data){
    const arr = []

    let list = data

    let res
    while(res = list.shift()){
        arr.push(res)
        if(res.children){
            Array.prototype.push.apply(list,res.children.map(v=>{
                return {
                    ...v,
                    name: `${res.name}/${v.name}`
                }
            }))
        }
    }

    return arr
}

console.log(bfs(data))
