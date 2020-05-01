import React,{Component} from 'react'
import {List,Grid} from 'antd-mobile'
class HeaderSelector extends Component {
    constructor(props){
        super(props)
        this.headerList=[]
        for(let i=0;i<20;i++){
            this.headerList.push({
                text:'',
                icon:require('../../assets/images/头像'+(i+1)+'.png')
            })
        }
    } 
    state={
        icon:null
    }   
    handleClick=({text,icon})=>{
        this.setState({
            icon
        })
        this.props.selectHeader(icon)
    }
    render() { 
        const listHead=!this.state.icon?'选择头像':(
            <div>
                已选择头像:<img src={this.state.icon}/>
            </div>
        )
        return (
            <List renderHeader={()=>listHead}>
                <Grid data={this.headerList}  
                    columnNum={5}
                    onClick={this.handleClick}
                />
            </List>
        );
    }
}
export default HeaderSelector;