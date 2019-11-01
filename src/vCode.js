const vCode = (user, psw) => {
    let token = ''
    this._JMLogin = () => {
        var that = this;
        /*
        * 飞讯
        *
        * return new Promise(resolve => {
            request.get({
                url: 'http://119.23.57.40:9180/service.asmx/UserLoginStr?name='+that.JMuser+'&psw='+that.JMpsw
            }, (error, res, body) => {
                console.log(body)
                let err, data, msg;
                if(error){
                    err = 1;
                    data = '';
                    msg = '网络繁忙'
                }else{
                    if(body.length > 3){
                        err = 0;
                        data = body;
                        msg = '登录成功'
                    }else{
                        err = 1;
                        data = body;
                        msg = '登录失败'
                    }

                }
                resolve({
                    err,
                    data,
                    msg
                })
            })
        })
        *
        *
        * 飞讯
        * */

        /*橙子*/
        return new Promise(resolve => {
            request.get({
                url: 'http://www.517orange.com:9000/devApi/loginIn?uid=' + that.JMuser + '&pwd=' + that.JMpsw,
                json: true
            }, (error, res, body) => {
                try {
                    console.log(body)
                    let err, data, msg;
                    if (error) {
                        err = 1;
                        data = '';
                        msg = '网络繁忙'
                    } else {
                        if (body.Token.length > 3) {
                            //设置token
                            that.JMToken = body.Token
                            that.JMUid = body.Uid
                            that.JMBalance = body.Balance
                            err = 0;
                            data = body;
                            msg = '登录成功'
                        } else {
                            err = 1;
                            data = body;
                            msg = '登录失败'
                        }

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
    this.JMLogin = () => {
        let that = this;
        this._JMLogin().then(res => {

            console.log(res)
            if (res.data.length > 3) {
                //that.JMToken = res.data;
                err = 0;
            } else {
                err = 1;
                msg = "登录失败"

            }
        })
    }
    this._JMGetPhone = () => {
        var that = this;
        /*
        * 飞讯
        *
        * return new Promise(resolve => {
            request.get({
                url: 'http://119.23.57.40:9180/service.asmx/GetHM2Str?token='+that.JMToken+'&xmid='+that.xmid+'&sl=1&lx=0&a1=&a2=&pk=&ks=0&rj='
            },(err, res, body) => {
                console.log('http://119.23.57.40:9180/service.asmx/GetHM2Str?token='+that.JMToken+'&xmid='+that.xmid+'&sl=1&lx=0&a1=&a2=&pk=&ks=&rj=')
                try{
                    console.log(body.toString())
                    if(err){
                        resolve({
                            err: 1,
                            msg: '获取号码错误'
                        })
                    }else{
                        let temps = body.split('=');
                        if(temps.length > 1 && temps[1].length > 1){
                            resolve({
                                err: 0,
                                phoneNum: temps[1]
                            })
                        }else{
                            resolve({
                                err: 1,
                                msg: body
                            })
                        }
                    }
                }catch (e) {
 
                }
            })
        })
        *
        *
        *
        * 飞讯
        * */

        //橙子

        return new Promise(resolve => {
            request.get({
                url: 'http://www.517orange.com:9000/devApi/getMobilenum?uid=' + that.JMUid + '&pid=' + that.xmid + '&token=' + that.JMToken,
                timeout: 5000,
            }, (err, res, body) => {
                //console.log('http://119.23.57.40:9180/service.asmx/GetHM2Str?token='+that.JMToken+'&xmid='+that.xmid+'&sl=1&lx=0&a1=&a2=&pk=&ks=&rj=')
                try {
                    console.log(body.toString())
                    if (err) {
                        resolve({
                            err: 1,
                            msg: '获取号码错误'
                        })
                        return
                    } else {
                        if (body == 'no_data') {
                            resolve({
                                err: 1,
                                msg: body
                            })
                            return
                        }
                        if (body.indexOf('余额不足') != -1) {
                            resolve({
                                err: 1,
                                msg: body
                            })
                            return
                        }
                        resolve({
                            err: 0,
                            phoneNum: body
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
    this.JMGetMsg = (traceIndex) => {
        //console.log("asd")
        var that = this;
        var item = this.traceList[traceIndex];
        var userIndex = item.id;
        return new Promise(resolve => {
            if (that.stopFlag) {
                resolve({
                    err: 1,
                    msg: '已停止'
                })
                return
            }
            this.traceList[traceIndex].delayNowTimes += 1;
            if (this.traceList[traceIndex].delayNowTimes >= this.traceList[traceIndex].delayAllTimes) {

                resolve({
                    err: 1,
                    msg: '获取验证码失败'
                })
                return
            }


            if (item.delayNow <= 0) {
                that.traceList[traceIndex].delayNow = item.delayAll
            } else {
                that.traceList[traceIndex].delayNow += -1;
                that.traceList[traceIndex].errMsg = '正在获取验证码...' + that.traceList[traceIndex].delayNow + 's';
                that.userList[item.id].errMsg = '正在获取验证码...' + that.traceList[traceIndex].delayNow + 's';
                this.showM = !this.showM;
                setTimeout(function () {
                    that.JMGetMsg(traceIndex).then(res => {
                        resolve(res)
                    })
                }, 1000)
                return
            }
            that._JMGetMsg(item.phoneNum).then(res => {
                try {
                    console.log(res)
                    /*
                                            * 飞讯
                                            *if(res=="1"){
                                                setTimeout(function(){
                                                    that.JMGetMsg(traceIndex).then(res => {
                                                        resolve(res)
                                                    })
                                                }, 1000)
                                                return
                                            }else{
                                                console.log(res)
                                                if(res.length > 4){
                                                    console.log(res)
                                                    resolve({
                                                        err: 0,
                                                        msg: res
                                                    })
                                                }
                                            }
                                            * 飞讯
                                            * */
                    if (!res || res == "no_data") {
                        console.log(res)
                        setTimeout(function () {
                            that.JMGetMsg(traceIndex).then(res => {
                                resolve(res)
                            })
                        }, 1000)
                        return
                    } else {
                        console.log(res)
                        if (res.length > 8) {
                            resolve({
                                err: 0,
                                msg: res
                            })
                        } else {
                            resolve({
                                err: 1,
                                msg: res
                            })
                        }
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
    this._JMGetMsg = (phoneNum) => {
        console.log('正在获取')
        let that = this;
        /*
        * 飞讯
        *return new Promise(resolve => {
            request.get({
                url: 'http://119.23.57.40:9180/service.asmx/GetYzm2Str?token='+that.JMToken+'&xmid='+that.xmid+'&hm='+phoneNum+'&sf=1',
            }, (err, res, body) => {
                //that._log(body)
                resolve(body)
            })
        })
        * 飞讯
        * */
        //橙子
        return new Promise(resolve => {
            request.get({
                url: 'http://www.517orange.com:9000/devApi/getVcodeAndReleaseMobile?uid=' + that.JMUid + '&pid=' + that.xmid + '&mobile=' + phoneNum + '&token=' + that.JMToken,
                timeout: 5000
            }, (err, res, body) => {
                //that._log(body)
                console.log("正在获取" + body)
                resolve(body)
            })
        })
    }
}

//信盒接码
const xhCode = (user, psw) => {
    this.login = () => {
        
    }
}

exports.Code = vCode