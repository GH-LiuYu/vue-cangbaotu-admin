//调试切换
const DEBUG = true;//true 本地服
// const DEBUG = false;//false 正式服
//配置请求api 测试服务/正式服务器
const APIURL = {
    local: "http://www.sanhuliangmeng.com/api",//本地测试
    serve: "http://www.sanhuliangmeng.com/api",//正式服
};
//返回服务地址
export const baseUrl = DEBUG ? APIURL.local : APIURL.serve;
