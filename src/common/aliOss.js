import OSS from 'ali-oss'

export const accessId = ''
export const accessKey = ''
export const host = ''
export const endPoint = ''
export const bucket = ''
export const region = ''

export const oss = {
    /**
   * 创建随机字符串
   * @param num
   * @returns {string}
   */
    randomString(num) {
        let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let res = ''
        for (let i = 0; i < num; i++) {
            var id = Math.ceil(Math.random() * 35)
            res += chars[id]
        }
        return res
    },
    /**
     * 创建oss客户端对象
     * @returns {*}
     */
    createOssClient() {
        return new Promise((resolve, reject) => {
            let client = new OSS({
                region: region,
                accessKeyId: accessId,
                accessKeySecret: accessKey,
                bucket: bucket
                // endpoint: endPoint,
                // cname: host
            })
            console.log(client)
            resolve(client)
        })
    },
    /**
     * 文件上传
     * @param option 参考csdn: https://blog.csdn.net/qq_27626333/article/details/81463139
     */
    ossUploadFile(option) {
        let file = option.file
        const self = this
        return new Promise((resolve, reject) => {
            let date = this.dateFormat(new Date(), 'yyyyMMdd') // 当前时间
            let dateTime = this.dateFormat(new Date(), 'yyyyMMddhhmmss') // 当前时间
            let randomStr = self.randomString(4)//  4位随机字符串
            let extensionName = file.name.substr(file.name.indexOf('.')) // 文件扩展名
            let fileName = 'lzcloud/sit/' + file.name // 文件名字（相对于根目录的路径 + 文件名）
            // 执行上传
            self.createOssClient().then(async client => {
                let cbName = await client.put(fileName, file).then(({ res, url, name }) => {
                    if (res && res.status == 200) {
                        console.log('successful callback', res, url, name)
                        return name
                    }
                }).catch((err) => {
                    console.log('failed callback', err)
                })
                console.log('cbName', cbName)

                let cbUrl = await this.getSignatureUrl(client, cbName)
                console.log('cbUrl', cbUrl)

            })
        })
    },
    getSignatureUrl(client, fileName) {
        return client.signatureUrl(fileName, {
            expires: 30
        })
    },
    /**
   * 时间日期格式化
   * @param format
   * @returns {*}
   */
    dateFormat(dateObj, format) {
        let date = {
            'M+': dateObj.getMonth() + 1,
            'd+': dateObj.getDate(),
            'h+': dateObj.getHours(),
            'm+': dateObj.getMinutes(),
            's+': dateObj.getSeconds(),
            'q+': Math.floor((dateObj.getMonth() + 3) / 3),
            'S+': dateObj.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length === 1
                    ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
            }
        }
        return format
    }
}