import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    WingBlank,
    WhiteSpace,
} from 'antd-mobile'
import {updateUser} from '../../redux/actions'
import HeaderSelector from "../../components/header-selector/header-selector";
class BossInfo extends Component {
    state = {
        userid:'',
        header:'',
        post:'',
        info:'',
        company:'',
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
        const {post,header,info,salary} =this.state
        const userid=this.props.user._id
        // console.log("值等于:"+userid)
        // console.log("this.state等于:"+this.state.post)
        this.props.updateUser({userid,post,header,info,post,salary})
        this.props.history.replace('/god')
        
    }

    render() { 
        const {header,type}=this.props.user
        const buttonActive={
            backgroundColor:'#4DB6AC'
        }
        if(header) { // 说明信息已经完善
            const path = type==='God' ? '/god' : '/boss'
            return <Redirect to={path}/>
          }

        return ( 
            <div>
                <NavBar className="navBar">完善信息</NavBar>
                <WingBlank>
                    <HeaderSelector  selectHeader={this.selectHeader} />
                    <InputItem placeholder="输入招聘职位" onChange={val=>{this.handlerChange('post',val)}}>招聘职位:</InputItem>
                     
                    <InputItem placeholder="输入公司名称" onChange={val=>{this.handlerChange('company',val)}}>公司名称:</InputItem>
                   
                    <InputItem placeholder="输入职位薪资" onChange={val=>{this.handlerChange('salary',val)}}>职位薪资:</InputItem>
                    <WhiteSpace/>
                    <TextareaItem title="职位要求:" rows={3} onChange={val=>{this.handlerChange('info',val)}} ></TextareaItem>
                    <Button type="primary" className="am-Button-me" activeStyle={buttonActive} onClick={this.save}>保存</Button>
                </WingBlank>
            </div>
         );
    }
}
 
export default connect(
    state=>({user:state.user}),
    {updateUser}
)(BossInfo);