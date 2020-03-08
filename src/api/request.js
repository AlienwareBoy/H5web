import axios from "axios";
import {
  Loading,
  Message
} from "element-ui";
import {
  Toast
} from 'mint-ui';
import {
  Indicator
} from 'mint-ui';
import router from "@/router/index";
let loadingInstance = null;
// const Version=107;
import {
  getAccessToken,
  removeAccessToken
} from "./cacheService";

//开发状态
let isTest = false;
const API_ROOT = process.env.VUE_APP_API;

// 请求的跟地址
// export const upload_api = `${API_ROOT}/attaches`
axios.defaults.baseURL = API_ROOT;
// 请求拦截器
axios.interceptors.request.use(
  config => {
    //  loadingInstance = Loading.service({})
    config.headers.common["Authorization-Admin"] = getAccessToken();
    return config;
  },
  error => {
    return Promise.error(error);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  res => {
    if (loadingInstance) loadingInstance.close();
    return res;
  },
  err => {
    // 登陆过期或者未登录
    if (err.response.data.httpStatus === 401) {
      router.push({
        name: "login"
      });
      removeAccessToken();
      Toast({
        message: '操作失误请重试',
        iconClass: 'icon icon-success'
      });
    }
    if (loadingInstance) loadingInstance.close();
    return Promise.reject(err.response);
  }
);

export const request = ({
  type = "post",
  url,
  data = {},
  noGlobalLoading,
  config = {}
} = {}) => {
  if (noGlobalLoading) {} else {
    Indicator.open('加载中...');
  }
  return axios[type](url, type === "get" ? {
    params: data
  } : data).catch(
    err => {
      /* 通用的错误捕获可以在这里操作 */
      // Message.error(`啊，好像出错了，数据跑到银河系外面去了。`)
      Message.error(`${err.data.msg}`);
      return Promise.reject(err);
    }
  );
};
