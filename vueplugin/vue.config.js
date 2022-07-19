/**
 * @author caijianjia
 * @date 2021-10-13 14:24
 */

module.exports = {
    publicPath: './',
    configureWebpack: config=>{
        // console.log(JSON.stringify(config.module.rules))
        config.module.rules.push({
            test: /h5\.vue$/
        })
    }
}
