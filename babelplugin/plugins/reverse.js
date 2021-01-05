/**
 * @author caijianjia
 * @date 2021-01-05 19:56
 */
module.exports = function() {
    return {
        visitor: {
            BinaryExpression(path, options){
                console.log('BinaryExpression==>', JSON.stringify(path.node), options.opts)
                path.node.operator =  options.opts.option
            },
            Identifier(path, options) {
                console.log('opts==>', JSON.stringify(path.node), options.opts)
                const name = path.node.name;
                // reverse the name: JavaScript -> tpircSavaJ
                path.node.name = name
                    .split("")
                    .reverse()
                    .join("");
            },
        },
    };
}
