/**
 * @author caijianjia
 * @date 2021-05-09 21:13
 */
const {app, BrowserWindow} = require('electron')
app.on('ready', ()=>{
    let win = new BrowserWindow()
    win.loadFile('index.html')
})
