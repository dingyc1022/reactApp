import React from 'react';
import { connect } from 'react-redux';
import { addGun,removeGun,addGunAsync } from './index.redux'
import {Button} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


// const mapStatetoProps = (state) =>{
//   return {num:state}
// }
// const actionCreators = {addGun,removeGun,addGunAsync};
// App = connect(mapStatetoProps,actionCreators)(App);
@connect(
  // 你要state什么属性放到props
  state =>({num:state}),
  // 你要什么方法放到props
  {addGun,removeGun,addGunAsync}
)

class App extends React.Component {
    render() {
      return (
        <div>
            <h1>现在有机枪{this.props.num}把</h1>
            <Button type="primary" style={{width:'100px'}} onClick = {this.props.addGun}>新兵入伍</Button>
            <Button type="primary" style={{width:'100px'}} onClick = {this.props.removeGun}>上交武器</Button>
            <Button type="primary" style={{width:'100px'}} onClick = {this.props.addGunAsync}>拖两天</Button>
        </div>
      )
    }
}
export default App;
