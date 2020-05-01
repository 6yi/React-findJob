import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,REST_USER} from './actions-type'
import {getredirectTo} from '../utils'

const initUser={
    username:'',
    type:'God',
    msg:'',//错误信息
    redirectTo:''
}

function user(state=initUser,action){
    switch(action.type){
        case AUTH_SUCCESS:
            const {type,header} = action.data
            return {...action.data,redirectTo:getredirectTo(type,header)}

        case ERROR_MSG:
            
            return {...state,msg:action.data}
        case RECEIVE_USER:
            return action.data
        case REST_USER:
            return {...initUser,msg:action.data}    
        default:
            return state
    }
}




export default combineReducers({
    user
})