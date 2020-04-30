import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderSelector from "../../components/header-selector/header-selector";
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    WingBlank,

    List,
    WhiteSpace,
    Radio
  
} from 'antd-mobile'

class BossInfo extends Component {
    state = {
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
        console.log(this.state)
    }

    render() { 
        const buttonActive={
            backgroundColor:'#4DB6AC'
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
    state=>({}),
    {}
)(BossInfo);