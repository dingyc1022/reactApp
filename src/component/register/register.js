import React from 'react'
import Logo from '../../component/logo/logo'
import { List,Radio, InputItem, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
@connect(
    state=>state.user,
    { register }
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius' //huozhe boss
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
       
    }
    handleChange(key,val){
        this.setState({
            [key]:val 
        })
    }
    handleRegister(){
        this.props.register(this.state)
    } 
    render(){
        const RadioItem = Radio.RadioItem; 
        return (
            <div>
                <Logo></Logo>

                <List>
                    {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                    <InputItem
                        onChange = {v=>{this.handleChange('user',v)}}
                    >用户名</InputItem> 
                    <WhiteSpace/>
                    <InputItem
                         onChange = {v=>{this.handleChange('pwd',v)}}
                    >密码</InputItem>
                    <WhiteSpace/> 
                    <InputItem
                         onChange = {v=>{this.handleChange('repeatpwd',v)}}
                    >确认密码</InputItem> 
                    <WhiteSpace/>
                    <RadioItem 
                         onChange = {v=>{this.handleChange('type','genius')}}
                        checked={this.state.type === "genius"}
                    >
                        牛人
                    </RadioItem>
                    <WhiteSpace/>
                    <RadioItem 
                          onChange = {v=>{this.handleChange('type','boss')}}
                        checked={this.state.type === "boss"}>
                        BOSS
                    </RadioItem>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
}
export default Register 