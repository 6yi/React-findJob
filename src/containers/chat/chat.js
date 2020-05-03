import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavBar, List, InputItem,Grid, Icon } from 'antd-mobile'
import {sendMsg,readMsg} from '../../redux/actions'
import defaultPic from '../../assets/images/头像1.png'
import QueueAnim from 'rc-queue-anim'
const Item = List.Item


 class Chat extends Component {

    state={
        content:'',
        isShow:false
    }
    componentDidMount() {
        // 初始显示列表
        window.scrollTo(0, document.body.scrollHeight+300)
        const targetID = this.props.match.params.userid
       
        this.props.readMsg(targetID,this.props.user._id)
        
    
      }
    
      componentDidUpdate () {
        // 更新显示列表
        window.scrollTo(0, document.body.scrollHeight+300)
      }

    componentWillMount(){
        const emojis = ['😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀'
        ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
        ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣'
        ,'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣']
      this.emojis = emojis.map(emoji => ({text: emoji}))
    }


    handleSend = () =>{
         const from =this.props.user._id
         const to = this.props.match.params.userid
         const content=this.state.content.trim()
         if(content){
            this.props.sendMsg({from,to,content})
         }
         this.setState({
            content:'',
            isShow:false
         })
    }

  

    back=()=>{
        this.props.history.go(-1)
    }

    toggleShow = () => {
        const isShow = !this.state.isShow
        this.setState({isShow})
        if(isShow) {
          // 异步手动派发resize事件,解决表情列表显示的bug
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
          }, 0)
        }
      }

    render() {
        const {user} = this.props
        const {users,chatMsgs}=this.props.chat
        const meId=user._id
        if(!users[meId]){
            return null
        }
        const targetId=this.props.match.params.userid
        const chatId=[meId,targetId].sort().join('_')

        var targetHeader =defaultPic

        if(users[meId].header){
            targetHeader=users[targetId].header
        }
      
        const msgs=chatMsgs.filter(msg=>
            msg.chat_id===chatId
        )
        return (
            <QueueAnim type="scaleBig">
            <div id='chat-page'>
            
                <NavBar icon={<Icon type="left"/>} className="am-Button-me sticky-header"  onClick={this.back}>{users[targetId].username}</NavBar>
                
                <List style={{marginTop:50, marginBottom: 50}}>
              
                    {
                        msgs.map(msg=>{
                            if(meId===msg.to){
                                return (
                                <Item 
                                key={msg._id}
                                thumb={targetHeader}
                               >
                                                {msg.content}
                                </Item>
                                )
                            }else{
                                return (
                             <Item 
                              key={msg._id}
                             className='chat-me' extra='我'>
                                     {msg.content}
                                 </Item>
                                ) 
                            }

                        })
                    }
                  
                </List>
                
                <div className='am-tab-chat'>
                    <InputItem onChange={val=>this.setState({content:val})}
                        value={this.state.content}
                        placeholder="请输入"
                        onFocus={()=>this.setState({isShow:false})}
                        extra={
                            <span>
                                <span onClick={this.toggleShow} style={{marginRight:5}}>😊</span>&nbsp;
                                <span 
                                onClick={this.handleSend}>发送</span>
                            </span>
                            
                        }
                    />
                   
                    {this.state.isShow ? (
                        <QueueAnim type="scale">
                        <Grid
                        data={this.emojis}
                        columnNum={8}
                        carouselMaxRow={4}
                        isCarousel={true}
                        onClick={(item) => {
                            this.setState({content: this.state.content + item.text})
                        }}
                        />
                          </QueueAnim>
                    ) : null}
                  
                </div>
                
            </div>
            </QueueAnim>
        )
    }
}
export default connect(
    state=>({
        user:state.user,
        chat:state.chat
    }),
    {sendMsg,readMsg}
)(Chat)