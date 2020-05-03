import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const Item=TabBar.Item
class NavFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {navList}=this.props
        navList=navList.filter((nav)=>{
                return nav.path!=='/setting'
            
        })
        const path=this.props.location.pathname

        return ( 
            <TabBar>
                {
                    navList.map((nav,index)=>(

                          <Item key={nav.path}
                                    badge={nav.path==='/message'?this.props.unReadCount:0}
                                    title={nav.text}
                                    icon={{uri:require('./icon/'+nav.icon+'.png')}}
                                    selectedIcon={{uri:require('./icon/'+nav.icon+'-select.png')}}
                                    selected={path===nav.path}
                                    onPress={()=>this.props.history.replace(nav.path)}
                                    >   
                                </Item>
                                
                        )
                        
                            
                    )   
                }    
            </TabBar>
         );
    }
}
 
export default withRouter(NavFooter);