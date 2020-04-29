import React,{Component} from 'react'
import {
    NavBar,
    WingBlank,
    List,
    WhiteSpace,
    InputItem
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

const ListItem=List.Item

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <NavBar>React &nbsp;直聘</NavBar>
                <Logo/>
            </div>
         );
    }
}


export default register;