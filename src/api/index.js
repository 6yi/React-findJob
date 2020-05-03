import ajax  from  './ajax'
import axios from 'axios'
const baseUrl = "http://39.98.114.177:4000"

//注册
export const reqRegister = (user) =>ajax(baseUrl+'/register',user,'POST')
//登陆
export const reqLogin = (user) =>ajax(baseUrl+'/login',user,'POST')
//更新
export const reqUpdateUser = (user) =>ajax(baseUrl+'/update',user,'POST')

export const reqUser = ()=>ajax(baseUrl+'/user')

export const reqUserList=(type)=>ajax(baseUrl+'/userlist',{type:type})


export const reqChatMsgList=(userid)=>{
    return axios.get(baseUrl+'/msglist?userid='+userid)
}


export const reqReadMsg=(from,to)=>ajax(baseUrl+'/readmsg',{from,to},'POST')


