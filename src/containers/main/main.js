import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookies from 'js-cookie' 
import {connect} from 'react-redux'
import {
    NavBar,
} from 'antd-mobile'


import 'react-animated-router/animate.css'; 

import Setting from '../setting/setting'
import Boss from '../boss/boss'
import God from '../god/god'
import Message from '../message/message'
import BossInfo from '../boss-info/boss-info'
import GodInfo from '../god-info/god-info'
import NotFound from '../../components/notfound/notfound'
import NavFooter from '../../components/nav-footer/nav-footer'
import Personal from '../personal/personal'
import Chat from '../chat/chat'

import {getUser} from '../../redux/actions'
import {getredirectTo} from '../../utils/index'

class Main extends Component {

    // 给组件对象添加属性
    navList=[
        {
            path:'/boss',
            component:Boss,
            title:'Boss列表',
            icon:'list',
            text:'Boss'
        },
        {
            path:'/god',
            component:God,
            title:'大神列表',
            icon:'list',
            text:'大神'   
        },
        {
            path:'/message',
            component:Message,
            title:'消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/personal',
            component:Personal,
            title:'个人',
            icon:'user',
            text:'个人'
        },
        {
            path:'/setting',
            component:Setting,
            title:'设置',
            icon:'user',
            text:'个人'
        },
    ]

   
    //渲染完毕后执行
    // componentDidMount(){
    //     //免登录,获取cookie去服务端查询
    //     const userid=Cookies.get('userid')
    //     const {_id}=this.props
    //     if(userid&&!_id){
    //        this.props.getUser()
    //     }
    // }

    render() { 
        // 读取cookie中的userid
        const userid = this.props.user._id
        // 如果没有, 自动重定向到登陆界面
      
        if(!userid) {
            return <Redirect _id={userid} to='/login'/>
        }
        // 如果有,读取redux中的user状态
      

    // } else {
    //   // 如果有_id, 显示对应的界面
    //   // 如果请求根路径, 根据user的type和header来计算出一个重定向的路由路径, 并自动重定向
    //     let path = this.props.location.pathname
    //     if(path==='/') {
    //         // 得到一个重定向的路由路径
    //         path = getredirectTo(user.type, user.header)
    //         return <Redirect to= {path}/>
    //     }
    // }



      const {navList} = this
      const path = this.props.location.pathname
      const currentNav = navList.find(nav=>nav.path===path)

        return (
            <div>
            {currentNav? <NavBar className="navBar sticky-header">{currentNav.title}</NavBar>:null}
                 <Switch>
                    {
                        navList.map((nav,index)=>  <Route key="index" path={nav.path} component={nav.component}/>)
                    }
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/godinfo' component={GodInfo}/>   
                    <Route path='/chat/:userid' component={Chat}/>
                    <Route path='/404' component={NotFound}/>               
                    </Switch>
                    {currentNav? <NavFooter className="navFooter" unReadCount={this.props.unReadCount} navList={navList}/>:null}
            </div>
        );
    }
}
 
export default connect(
    state=>({
        user:state.user,
        unReadCount:state.chat.unReadCount
    }),{getUser}
)(Main);