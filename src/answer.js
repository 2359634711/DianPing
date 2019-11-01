const Request = require('request')

const request = Request.defaults({
    timeout: 10000,
})
async function addAnswerLike(shopId, questionId, answerId, item) {
    await _requestAnswerLike(shopId, questionId, answerId, item);
    return { err: null }
}

function _requestAnswerLike(shopId, questionId, answerId, item) {
    request.post({
        proxy: that.traceList[traceIndex].proxy,
        url: 'https://m.dianping.com/forum/question/ajax/addAnswerLike',
        headers: {
            'Host': 'm.dianping.com',
            'Connection': 'keep-alive',
            'Origin': 'https://m.dianping.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Referer': 'https://m.dianping.com/forum/question/' + questionId + '/followdetail?followNoteId=' + answerId + '&followType=1&shopId=' + shopId,
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Accept-Encoding': 'deflate',
            'cookie': item.cookie
        },
        json: true,
        // jar: item.jar,
        body: 'questionId=' + questionId + '&answerId=' + answerId + '&token=&isLogin=true&cx='
    }, (err, res, body) => {
        console.log(body)
    })
}

exports.addAnswerLike = addAnswerLike