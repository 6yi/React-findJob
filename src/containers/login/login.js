import React,{Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../../redux/actions'
import {
    NavBar,
    WingBlank,
    List,
    WhiteSpace,
    InputItem,
    Button
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/logo/logo'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            password2:'',
        }
    }
    register=()=>{
        this.props.login(this.state)
          
    }
    handleChange=(name,val)=>{
            this.setState({
                [name]:val
        })
            
    }
    backRegister=()=>{
        this.props.history.replace('/register')
    }
    render() { 
        let {msg,redirectTo} = this.props.user
       
        if(redirectTo){
       
            return(
                <Redirect  to={redirectTo}></Redirect>
            )
        }

        return ( 
            <div>
                <NavBar className="navBar">React &nbsp;直聘</NavBar>
                <Logo/>
                <br/>
                <WingBlank>
                    <List>
                        <span className="msg">{msg}</span>
                        <WhiteSpace/>
                        <InputItem onChange={val=>{this.handleChange("username",val)}}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password"  onChange={val=>{this.handleChange("password",val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <WingBlank>
                        <Button type="primary" className="am-Button-me" onClick={this.register}>登陆</Button>
                        <WhiteSpace/>
                        <Button className="ghost-Button-me" onClick={this.backRegister} type="ghost">注册</Button>
                        </WingBlank>
                        <WhiteSpace/>
                        <br/>
                    </List>
                </WingBlank>
            </div>
         );
    }
}

export default connect(
    state=>({user:state.user}),
    {login}
)(Login)