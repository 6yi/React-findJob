import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from './actions-type'

const initUser={
    username:'',
    type:'God',
    msg:'',//错误信息
    redirectTo:''
}

function user(state=initUser,action){
    switch(action.type){
        case AUTH_SUCCESS:
            
            return {...action.data,redirectTo:'/'}

        case ERROR_MSG:
            
            return {...state,msg:action.data}

        default:
            return state
    }
}


export default combineReducers({
    user
})