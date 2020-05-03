import React,{Component} from 'react'
import  {connect} from 'react-redux'
import {Result,WhiteSpace,List,WingBlank,TextareaItem} from 'antd-mobile'

/**
 *  个人主界面路由
 */
const Item=List.Item
const Brief=Item.Brief

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    toSetting=()=>{
        this.props.history.replace('/setting')
    }

    render() { 
        const {username,header,company,post,salary,info} =this.props.user
        return (
            <>
              <div  style={{marginTop:'13%'}}>
                 <Result
                    img={<img src={header}/>}
                    title={username}
                    message={company}
                    >  </Result><img  onClick={this.toSetting} className="setting" src={require('../../assets/images/setting.png')}/>
                    </div>
                <WhiteSpace />
                <List renderHeader={()=>'相关信息'} wrap="true">
                    <Item multipleLine="true" wrap="true">
                            <Brief>职位:</Brief>
                            <p>{post}</p>
                           {salary?<Brief multipleLine>薪资: {salary}</Brief>:null} 
                           <Brief>简介:</Brief>

                    <TextareaItem style={{whiteSpace: 'pre-wrap'}} value={info}  rows={4} editable="false"></TextareaItem>

                    
                    </Item>
                    <WingBlank>
                   
                    </WingBlank>
                   
                </List>
                
            </>
         );
    }
}
 
export default connect(
    state=>({
        user:state.user
    })
)(Personal);