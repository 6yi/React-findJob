import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import HeaderSelector from "../../components/header-selector/header-selector";
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    WingBlank,
    WhiteSpace, 
} from 'antd-mobile'
import {updateUser} from '../../redux/actions'
class GodInfo extends Component {
    state = { 
        header:'',
        post:'',
        info:'',
        salary:''
     }
     handlerChange = (name,value)=>{
        this.setState({
            [name]:value
        })
    }
    selectHeader =(header)=>{
        this.setState({
            header
        })

    }
    save=()=>{
       
       this.props.updateUser(this.state)
       this.props.history.replace('/')
       
    }

     render() { 
        const {header,type}=this.props.user
        const buttonActive={
            backgroundColor:'#4DB6AC'
        }
        if(header){
            const path= (type==='Boss'?'/boss':'/god')
            return <Redirect to={path}/>
        }
        return ( 
            <div>
                <NavBar className="navBar">完善信息</NavBar>
                <WingBlank>
                    <HeaderSelector  selectHeader={this.selectHeader}/>
                    <InputItem placeholder="输入求职岗位"  onChange={val=>{this.handlerChange('post',val)}}>求职岗位:</InputItem>                    
                
                    <WhiteSpace/>
                    <TextareaItem title="个人简介:" rows={3}  onChange={val=>{this.handlerChange('info',val)}}></TextareaItem>
                    <Button type="primary" className="am-Button-me" activeStyle={buttonActive} onClick={this.save}>保存</Button>
                </WingBlank>
            </div>
         );
    }
}
 
export default connect(
    state=>({user:state.user}),
    {updateUser}
)(GodInfo);