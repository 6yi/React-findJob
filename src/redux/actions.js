import {reqLogin,reqRegister,reqUpdate} from '../api/index'
import {AUTH_SUCCESS,ERROR_MSG} from './actions-type'

//授权成功同步状态
const authSuccess = (user) =>({
    type:AUTH_SUCCESS,
    data:user
})
const errorMsg = (msg) =>({
    type:ERROR_MSG,
    data:msg
})

export const register = (user)=>{
    const {username,password,password2,type}=user;
    if(!username|!password){
        return errorMsg('用户名和密码不可为空')
    }
    if(password!==password2){
        return errorMsg('密码不一致')
    }
    //声明异步
    return async dispatch=>{
        //同步等待结果 
        const  response = await reqRegister({username,password,type})
        const result=response.data
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }
    }
}

export const login = (user)=>{
    const {username,password}=user;
    if(!username||!password){
        return errorMsg('用户名和密码不可为空')
    }
    //声明异步
    return async dispatch=>{
        //同步等待结果 
        const  response = await reqLogin({username,password})
        const result=response.data
        if(result.code===0){
            dispatch(authSuccess(result.data))
        }else{
            dispatch(errorMsg(result.msg))
        }
    }
}