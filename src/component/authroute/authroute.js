import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathName = this.props.location.pathname
        if(publicList.indexOf(pathName) > -1){
            return null
        }
        //获取用户信息
        // 是否登录  现在的地址是否在需要跳入登录  用户的type  用户信息是否完善
        axios.get('/user/info')
        .then( res =>{
            if(res.status === 200){
                if(res.data.code === 0){
                    //有登录信息的 
                }else{
                   this.props.history.push('/login')
                }
            }
        })
    }
    render(){
        return null
    }
}
export default AuthRoute