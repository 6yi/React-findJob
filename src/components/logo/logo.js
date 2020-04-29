import React from 'react'
import logo from './logo.png'
import './logo.less'
export default function Logo(){
    return(
        <div class="logo-container">
            <img src={logo} alt="logo" class="logo-img"/>
        </div>
    )
}