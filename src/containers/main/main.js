import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Cookies from 'js-cookie' //操作前端Cookie对象
import {connect} from 'react-redux'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button,
    WingBlank,
    WhiteSpace,
} from 'antd-mobile'


import Setting from '../setting/setting'
import Boss from '../boss/boss'
import God from '../god/god'
import Message from '../message/message'
import BossInfo from '../boss-info/boss-info'
import GodInfo from '../god-info/god-info'
import NotFound from '../../components/notfound/notfound'
import NavFooter from '../../components/nav-footer/nav-footer'
import Personal from '../personal/personal'

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
    componentDidMount(){
        //免登录,获取cookie去服务端查询
        const userid=Cookies.get('userid')
        const {_id}=this.props
        if(userid&&!_id){
           this.props.getUser()
        }
    }

    render() { 
      const userid=Cookies.get('userid')
      if(!userid){
          return <Redirect to='/login'/>
      }
      const user=this.props.user
      if(!user._id){
          
      }else{
          let path=this.props.location.pathname
          if(path==='/'||path==='/main'){
            path=getredirectTo(user.type,user.header)
            return <Redirect to={path}/>
          }
      }
      const {navList} = this
      const path = this.props.location.pathname

      const currentNav = navList.find(nav=>nav.path==path)

        return (
            <div>
            {currentNav? <NavBar className="navBar">{currentNav.title}</NavBar>:null}
                <Switch>
                    {
                        navList.map((nav,index)=>  <Route key="index" path={nav.path} component={nav.component}/>)
                    }
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/godinfo' component={GodInfo}/>   
                    <Route path='/boss' component={Boss}/>
                    <Route path='/god' component={God}/>
                    <Route path='/setting' component={Setting}/>
                    <Route  component={NotFound}/>      
                </Switch>
                {currentNav? <NavFooter className="navFooter" navList={navList}/>:null}
            </div>
        );
    }
}
 
export default connect(
    state=>({
        user:state.user
    }),{getUser}
)(Main);