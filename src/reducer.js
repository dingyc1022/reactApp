// 合并所有的reducer并返回

import { combineReducers } from 'redux';
import { user } from  './redux/user.redux'

export default combineReducers({user}); 