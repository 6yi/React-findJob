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
    handleClick=(el)=>{

    }
    render() { 
        const listHead='选择头像';
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