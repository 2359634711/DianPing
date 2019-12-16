function _JMGetMsg(phoneNum) {
    console.log('正在获取')
    let that = this;
    return new Promise(resolve => {
        request.get({
            url: `http://api.xinma1.com:10000/getMessage?token=${that.JMToken}&ItemId=${that.xmid}&Phone=${phoneNum}`,
            timeout: 5000
        }, (err, res, body) => {
            //that._log(body)
            console.log("正在获取" + body)
            resolve(body)
        })
    })
}

function _JMLogin() {
    var that = this;
    return new Promise(resolve => {
        request.get({
            url: 'http://api.xinma1.com:10000/login?uName=' + that.JMuser + '&pWord=' + that.JMpsw + '&Developer=' + that.JMdev,
            // json: true
        }, (error, res, body) => {
            try {
                console.log(body)
                let ress = body.split('&')
                let err, data, msg;
                if (error || ress.length <= 1) {
                    err = 1;
                    data = '';
                    msg = error ? '网络繁忙' : body
                } else {
                    that.JMToken = ress[0]
                    err = 0;
                    data = ress[0];
                    msg = body
                }
                resolve({
                    err,
                    data,
                    msg
                })
            } catch (e) {
                console.log(e)
                resolve({
                    err: 1,
                    data: '',
                    msg: '网络繁忙'
                })
            }

        })
    })

}


function _JMGetPhone() {
    var that = this;
    return new Promise(resolve => {
        request.get({
            url: `http://api.xinma1.com:10000/getPhone?ItemId=${that.xmid}&token=${that.JMToken}&Area=${encodeURIComponent(that.province)}&PhoneType=${that.phoneType}`,
            timeout: 5000,
        }, (err, res, body) => {
            //console.log('http://119.23.57.40:9180/service.asmx/GetHM2Str?token='+that.JMToken+'&xmid='+that.xmid+'&sl=1&lx=0&a1=&a2=&pk=&ks=&rj=')
            try {
                console.log(body.toString())
                let ress = body.split(';')
                if (err) {
                    resolve({
                        err: 1,
                        msg: '获取号码错误'
                    })
                    return
                } else {
                    if (!ress[0]) {
                        resolve({
                            err: 1,
                            msg: body
                        })
                        return
                    }
                    resolve({
                        err: 0,
                        phoneNum: ress[0]
                    })
                    return
                }
            } catch (e) {
                console.log(e)
                resolve({
                    err: 1,
                    msg: "网络错误"
                })
            }
        })
    })

}