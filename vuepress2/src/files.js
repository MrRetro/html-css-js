/**
 * @author caijianjia
 * @date 2021-07-14 15:48
 */
export const getAll = function (level, dir) {
    let path = require('path');
    let fs = require('fs');
    let filesNameArr = []
    // let cur = 0
    // 用个hash队列保存每个目录的深度
    let mapDeep = {}
    mapDeep[dir] = 0

    console.log('retro==>')

    // 先遍历一遍给其建立深度索引
    function getMap(dir, curIndex) {
        let files = fs.readdirSync(dir) //同步拿到文件目录下的所有文件名
        files.map(function (file) {
            //let subPath = path.resolve(dir, file) //拼接为绝对路径
            let subPath = path.join(dir, file) //拼接为相对路径
            let stats = fs.statSync(subPath) //拿到文件信息对象
            // 必须过滤掉node_modules文件夹
            if (file != 'node_modules') {
                mapDeep[file] = curIndex + 1
                if (stats.isDirectory()) { //判断是否为文件夹类型
                    return getMap(subPath, mapDeep[file]) //递归读取文件夹
                }
            }
        })
    }

    getMap(dir, mapDeep[dir])

    function readdirs(dir, folderName) {
        let result = { //构造文件夹数据
            path: dir,
            title: path.basename(dir),
            type: 'directory',
            deep: mapDeep[folderName]
        }
        let files = fs.readdirSync(dir) //同步拿到文件目录下的所有文件名
        result.children = files.map(function (file) {
            //let subPath = path.resolve(dir, file) //拼接为绝对路径
            let subPath = path.join(dir, file) //拼接为相对路径
            let stats = fs.statSync(subPath) //拿到文件信息对象
            if (stats.isDirectory()) { //判断是否为文件夹类型
                return readdirs(subPath, file, file) //递归读取文件夹
            }
            return { //构造文件数据
                path: subPath,
                name: file,
                type: 'file'
            }
        })
        return result //返回数据
    }
    filesNameArr.push(readdirs(dir, dir))
    return filesNameArr
}
