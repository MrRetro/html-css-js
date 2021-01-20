/**
 * @author caijianjia
 * @date 2021-01-20 17:55
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

// 深度优先把树形结构平铺
function dfs(data){
    const arr = []

    const func = (data, name)=>{
        data.map(v=>{
            arr.push({
                ...v,
                name: name?`${name}/${v.name}`:v.name
            })
            if(v.children && v.children.length){
                func(v.children, v.name)
            }
        })
    }

    func(data)

    return arr
}

console.log(dfs(data))
