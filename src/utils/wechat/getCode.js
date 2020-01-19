// 微信登录
function getCode() {
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }
  const APPID = '###'
  // 非静默授权，第一次有弹框
  const code = getQueryString("code"); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
  let local = window.location.href;
  if (code == null || code == "") {
    window.location.replace(
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        APPID +
        "&redirect_uri=" +
        encodeURIComponent(local) +
        "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
    );
  } else {
    // 把code传给后台获取用户信息
    this.getOpenId(code);
  }
},