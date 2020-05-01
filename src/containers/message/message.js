import React,{Component} from 'react'
import  {connect} from 'react-redux'
/**
 *  Boss主界面路由
 */

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                Boss
            </>
         );
    }
}
 
export default connect(
    state=>({
        user:state.user
    })
)(Message);