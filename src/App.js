import React from 'react';
import {Button} from 'antd-mobile';
import  'antd-mobile/dist/antd-mobile.css';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      solders:['hjuzi','zhuzi']
    }
    //  this.addSolder =  this.addSolder.bind(this);
  }
  addSolder = ()=>{
    console.log(this)
    this.setState({
      solders:[...this.state.solders,'xinbing'+Math.random()]
    })
  }
  render(){
    let boss = "liyunlong"
    return (
      <div>
          <h1>{boss}</h1>
          <Button type="primary" onClick = {this.addSolder}>新兵入伍</Button>
          <ul>
            {this.state.solders.map((v)=>{
              return <li key = {v}>{v}</li>
            })}
          </ul>
      </div>
    )
  }
}



export default App;
