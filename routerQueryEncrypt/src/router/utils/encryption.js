/**
 * @author caijianjia
 * @date 2021-07-20 18:50
 */
/*
 * 默认在html已经引入了  crypto-js.js  文件
 * 或者npm install crypto-js --save 安装
 * 然后使用import CryptoJS from "crypto-js"
 * 加密 解密
 */
import CryptoJS from "crypto-js"
const baseCryptoCode = "666777888999asde"; // 私钥自己指定

const getKeyHex = () => CryptoJS.enc.Latin1.parse(baseCryptoCode);

const getIvHex = () => CryptoJS.enc.Latin1.parse(baseCryptoCode);

/**
 * 加密
 * @param {String} key
 * @param {String} cryptoCode
 * @returns {string}
 */
export const getEncrypt = (key, cryptoCode) => {
  let keyHex = getKeyHex(cryptoCode);
  let ivHex = getIvHex();
  try {
    key = JSON.stringify(key);
  } catch (e) {
    console.warn(e);
  }
  return CryptoJS.AES.encrypt(key, keyHex, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
    iv: ivHex
  }).toString();
}

/**
 * 加密后转base64
 * @param {String}} key
 * @param {String} cryptoCode
 */
export const getEncryptToBase64 = (key, cryptoCode) => {
  let encryptStr = getEncrypt(key, cryptoCode);
  let wordArray = CryptoJS.enc.Utf8.parse(encryptStr);
  return CryptoJS.enc.Base64.stringify(wordArray);
  // const newKey = JSON.stringify(key || {})
  // return btoa(newKey)
}

/**
 * 解密
 * @param data
 * @returns {string}
 */
export const getDecrypt = data => {
  let keyHex = getKeyHex();
  let ivHex = getIvHex();
  let decrypted = CryptoJS.AES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(data)
  }, keyHex, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
    iv: ivHex
  })
  decrypted = decrypted.toString(CryptoJS.enc.Utf8);
  try {
    decrypted = JSON.parse(decrypted);
  } catch (e) {
    console.warn(e);
  }
  return decrypted
}

/**
 * 对base64数据解密  先解析base64，在做解密
 * @param {String} data
 * @returns {string}
 */
export const getDecryptByBase64 = data => {
  let parsedWordArray = CryptoJS.enc.Base64.parse(data);
  let decryptStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
  return getDecrypt(decryptStr);
  // const re = atob(data)
  // return JSON.parse(re)
}
