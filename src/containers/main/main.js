import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import BossInfo from '../boss-info/boss-info'
import GodInfo from '../god-info/god-info'

class main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}/>
                    <Route path='/godinfo' component={GodInfo}/>   
                </Switch>
            </>
        );
    }
}
 
export default main;