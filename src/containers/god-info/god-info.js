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

    

    constructor(props) {
        super(props);
        this.state = {
            userid:'' ,
            header:'',
            post:'',
            info:'',
            salary:''
         }
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
        // this.setState({
        //     userid:this.props.userid
        // })
        const {post,header,info,salary} =this.state
        const userid=this.props.user._id
        // console.log("值等于:"+userid)
        // console.log("this.state等于:"+this.state.post)
        this.props.updateUser({userid,post,header,info,post,salary})
        this.props.history.replace('/boss')
     
    }

     render() { 
        const {header,type}=this.props.user
        const buttonActive={
            backgroundColor:'#4DB6AC'
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