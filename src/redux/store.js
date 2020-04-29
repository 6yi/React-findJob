import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'


//向外暴露
export default createStore(reducers,
    applyMiddleware(thunk))