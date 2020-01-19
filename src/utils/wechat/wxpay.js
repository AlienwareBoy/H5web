/* data 为 后端调用统一下单接口返回的支付参数,注意onBridgeReady可能有检测不到的问题,可以用定时器 */
/*  */
/*  */
export function weixinPay(data) {
  var vm = this
  if (typeof WeixinJSBridge == 'undefined') {
    if (document.addEventListener) {
      document.addEventListener(
        'WeixinJSBridgeReady',
        vm.onBridgeReady(data),
        false
      )
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data))
      document.attachEvent('onWeixinJSBridgeReady', vm.onBridgeReady(data))
    }
  } else {
    console.log('---6---')
    this.onBridgeReady(data)
  }
},
export function onBridgeReady(config) {
  let self = this
  const { timeStamp, nonce, prepayId, paySign, signType } = config
  console.log('调用微信支付的对象', {
    appId: '###', //公众号名称，由商户传入
    timeStamp, //时间戳，自1970年以来的秒数
    nonceStr: nonce, //随机串
    package: `prepay_id=${prepayId}`,
    signType, //微信签名方式：
    paySign //微信签名
  })
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',
    {
      appId: '###', //公众号名称，由商户传入
      timeStamp: timeStamp, //时间戳，自1970年以来的秒数
      nonceStr: nonce, //随机串
      package: `prepay_id=${prepayId}`,
      signType: 'MD5', //微信签名方式：
      paySign: paySign //微信签名
    },
    function(res) {
      console.log('我是支付后的结果', res)
      if (res.err_msg == 'get_brand_wcpay_request:ok') {
        console.log('支付成功')
      } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
        console.log('取消支付')
      } else if (res.err_msg == 'get_brand_wcpay_request:fail') {
        console.log('支付失败')
      } else {
        alert('未知异常')
        console.log(res, '--------sdfsfsfdfsfs')
      }
    }
  )
},