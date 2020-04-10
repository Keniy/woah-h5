/**
 * 判断数组某个对象包包含某个字符串的对象
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} str
 * @returns
 */
export function arrayAttrToObj(array, attr, str) {
    if (Array.isArray(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][attr] == str)
                return array[i]
        }
    }
    return null
}

export function isKorean(text) {
    const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
    return reg.test(text);
}