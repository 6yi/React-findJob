import ajax  from  './ajax'
const baseUrl = ""

//注册
export const reqRegister = (user) =>ajax(baseUrl+'/register',user,'POST')
//登陆
export const reqLogin = (user) =>ajax(baseUrl+'/login',user,'POST')
//更新
export const reqUpdate = (user) =>ajax(baseUrl+'/update',user,'POST')

export const reqUser = ()=>ajax(baseUrl+'/user')
