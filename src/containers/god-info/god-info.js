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

class GodInfo extends Component {
    state = {  }
    render() { 
        const buttonActive={
            backgroundColor:'#4DB6AC'
        }
        return ( 
            <div>
                <NavBar className="navBar">完善信息</NavBar>
                <WingBlank>
                    <HeaderSelector/>
                    <InputItem placeholder="输入求职岗位">求职岗位:</InputItem>                    
                
                    <WhiteSpace/>
                    <TextareaItem title="个人简介:" rows={3}></TextareaItem>
                    <Button type="primary" className="am-Button-me" activeStyle={buttonActive}>保存</Button>
                </WingBlank>
            </div>
         );
    }
}
 
export default connect(
    state=>({}),
    {}
)(GodInfo);