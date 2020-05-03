import React,{Component} from 'react'
import  {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from '../../components/user-list/user-list'
/**
 *  Boss主界面路由
 */

class Boss extends Component {
    state={
        UserList:[]
    }
    componentDidMount(){
        this.props.getUserList('Boss')
    }
    render() { 
        return (
            <> 
              <UserList userList={this.props.userlist}/> 
            </>
         );
    }
}
 
export default connect(
    state=>({
        userlist:state.userList
    }),
    {getUserList}
)(Boss);