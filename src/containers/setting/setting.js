import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderSelector from '../../components/header-selector/header-selector'
import Cookies from 'js-cookie'

import {
    Modal,
    InputItem,
    TextareaItem,
    Button,
    WingBlank,
    WhiteSpace,
    List,
    
} from 'antd-mobile'

import {updateUser,restUser} from '../../redux/actions'

const Item=List.Item
const Brief=Item.Brief
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state= {
            header:'',
            post:'',
            info:'',
            company:'',
            salary:''
        }
    }

    handlerChange = (name,value)=>{
        this.setState({
            [name]:value
        })
       
    }
    exit=()=>{
        Cookies.remove('userid')
        
        this.props.history.replace('/login')
    }

    onClose = key => () => {
        this.setState({
          [key]: false,
        });
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      } 

    initState=()=>{
        const user=this.props.user
        this.setState(
            user
        )
    }
    selectHeader =(header)=>{
        this.setState({
            header
        })

    }
    save=()=>{
       this.props.updateUser(this.state)
       this.props.restUser();
       this.props.history.replace('/personal')
    }
    componentDidMount(){
        this.initState();
    }
    
    showAlert = () => {
        Modal.alert('退出', '确认退出吗?', [
          { text: '取消' },
          { text: '确定', onPress: () => this.exit() },
        ]);
     
    }
    render() {
        const {header,company,post,salary,info} =this.props.user
       
        return (
            <div >

                <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                        >
                        <HeaderSelector  selectHeader={this.selectHeader}/>
                        <Button type="primary" className="am-Button-me" activeStyle={{'backgroundColor':'#4DB6AC'}} onClick={this.onClose('modal2')} >确定</Button>
                    </Modal>

                <WingBlank>
                    <InputItem onClick={this.showModal('modal2')} 
                        value=""
                            editable={false}
                        >头像
                        <img  className="setting-header"  onClick={this.toSetting} className="setting-header" src={this.state.header}/>
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem  value={this.state.post} onChange={val=>{this.handlerChange('post',val)}}>职位:</InputItem>
                    {this.state.company?<InputItem  value={this.state.company} onChange={val=>{this.handlerChange('company',val)}}>公司:</InputItem>:null}
                    {this.state.salary?<InputItem  value={this.state.salary} onChange={val=>{this.handlerChange('salary',val)}}>薪资:</InputItem>:null}
                    <WhiteSpace/>
                    <TextareaItem title="简介:" rows={7} onChange={val=>{this.handlerChange('info',val)}} value={this.state.info}></TextareaItem>
                    <WhiteSpace/>
                    <br/>
                    <br/>
        
                        <Button type="primary" className="am-Button-me" activeStyle={{'backgroundColor':'#4DB6AC'}} onClick={this.save}>保存</Button>
                        <WhiteSpace/>
                        <Button type="warning" onClick={this.showAlert}>退出登陆</Button>
                </WingBlank>
                    
            </div>
         );
    }
}
 
export default connect(
    state=>({
        user:state.user
    }),
    {updateUser,restUser}
)(Setting);