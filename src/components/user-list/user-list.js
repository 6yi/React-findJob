import React,{Component} from 'react'
import {WingBlank,WhiteSpace,Card} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
const Header = Card.Header
const Body = Card.Body
class UserList extends Component {
 
   
    render() { 
        const {userList} = this.props
        return (
           
            <WingBlank style={{marginBottom:50, marginTop:50}}>
            <QueueAnim delay={500}>
                {
                    userList.map(user=>(
                        <div key={user._id}>
                        <WhiteSpace/>
                        <Card  onClick={() => this.props.history.push(`/chat/${user._id}`)}>
                        <div>
                            <Header  
                                thumb={user.header}
                                extra={user.username}
                            />
                            <Body o>
                                <div>职位:{user.post}</div>
                                {user.company?<div>公司:{user.company}</div>:null}
                                {user.salary?<div>薪资:{user.salary}</div>:null}
                                <div>简介:{user.info}</div>
                            </Body>
                            </div>
                        </Card>
                        </div>
                    ))

                }
                </QueueAnim>
            </WingBlank>
          );
    }
}
 
export default withRouter(UserList);