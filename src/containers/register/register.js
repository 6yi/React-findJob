import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    NavBar,
    WingBlank,
    List,
    WhiteSpace,
    InputItem,
    Radio,
    Button
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/actions'
// import './register.less'
import Logo from '../../components/logo/logo'
const ListItem=List.Item

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            password2:'',
            type:'God',
        }
    }
  
    register=()=>{
        this.props.register(this.state)
        
    }
    handleChange=(name,val)=>{
            this.setState({
                [name]:val
            })
            
    }
    backLogin=()=>{
        this.props.history.replace('/login')
    }
    render() { 
        const {type} =this.state
        const {msg,redirectTo} = this.props.user
        const buttonActive={
            backgroundColor:'#4DB6AC'
        }
        if(redirectTo) {
            console.log("register跳转到到:"+redirectTo+"值等于:"+this.props.user);
            
                this.props.history.replace(redirectTo)
            
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
                        <InputItem type="password"  onChange={val=>{this.handleChange("password2",val)}}>确认密码:</InputItem>
                        <ListItem>
                            <sapn>用户类型: </sapn>
                            &nbsp;&nbsp;&nbsp;
                            <Radio onChange={()=>this.handleChange('type',"God") } checked={type==='God'} >大神</Radio>
                            &nbsp;&nbsp;&nbsp;
                            <Radio onChange={()=>this.handleChange('type',"Boss") } checked={type==='Boss'}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <WingBlank>
                        <Button type="primary" className='am-Button-me' activeStyle={buttonActive} onClick={this.register}>注册</Button>
                        <WhiteSpace/>
                        <Button className="ghost-Button-me" onClick={this.backLogin} type="ghost">已有账户</Button>
                        </WingBlank>
                        <br/>
                    </List>
                   
                </WingBlank>
            </div>
         );
    }
}

export default connect(
    state=>({user:state.user}),
    {register}
)(Register);