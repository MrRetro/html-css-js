/**
 * 获取节点的所有父级节点
 * @param data 整个树
 * @param nodeId 某节点的id
 * @param idStr 自定义设置唯一标识名称
 * @param childrenStr 自定义设置孩子节点名称
 * */
function getParentNode({data, nodeId, idStr = 'id', childrenStr = 'children'}) {
    let arrRes = [];
    if (data.length === 0) {
      if (nodeId) {
        arrRes.unshift(data)
      }
      return arrRes;
    }
    let rev = (arr, nodeId, pareantId) => {
      for (let i = 0, length = arr.length; i < length; i++) {
        let node = arr[i];
        node._pareantId = pareantId
        if (node[idStr] === nodeId) {
          arrRes.unshift(node)
          rev(data, node._pareantId);
          break;
        } else {
          if (node[childrenStr]) {
            rev(node[childrenStr], nodeId, node[idStr]);
          }
        }
      }
      return arrRes;
    };
    arrRes = rev(data, nodeId);
    return arrRes;
  }

//   let data = [
//     {value: 1, childrens: [{value: 2, childrens: [{value: 3}]}]},
//     {value: 4, childrens: [{value: 5, childrens: [{value: 6}]}]},
//     ]
//   console.log(getParentNode({data, nodeId: 6, idStr: 'value', childrenStr:'childrens'}))