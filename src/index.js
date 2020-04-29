import React from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css'
// import {Button} from 'antd-mobile'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Register from './containers/register/register'
import Main from './containers/main/main'

ReactDOM.render(
(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/register' component={Register}></Route>
                <Route  component={Main}></Route>/*默认页面*/
            </Switch>
        </HashRouter>
    </Provider>

),document.getElementById("root"))