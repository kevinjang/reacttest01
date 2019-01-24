import React, { Component } from 'react';
import './App.css';

// import store from './store'
import { connect } from 'react-redux'
import {add,minus,addOneSecLate} from './counter.redux'

import DisplayNum from './DisplayNum'
import {Route,Link,Redirect} from 'react-router-dom'

@connect(
  state => ({
    num: state
  }),
  //  {
  //   add: () => ({ type: 'add' }),
  //   minus: () => ({ type: 'minus' }),
  //   addOneSecLate: () => dispatch1 => {
  //     // console.log(dispatch1)
  //     setTimeout(() => {
  //       dispatch1({ type: 'add' })
  //     }, 1000)
  //   }
  // }
  {add,minus,addOneSecLate}
)
class Counter extends Component {
  render() {
    return (
      <div className="App">

        {/* {console.log('this.props',this.props)} */}
        {/* {this.props.num} */}
        <DisplayNum></DisplayNum>
        <p>
          <button onClick={() => this.props.add()}>+</button>
          <button onClick={() => this.props.minus()}>-</button>
          <button onClick={() => { this.props.addOneSecLate(); console.log(this.props.addOneSecLate) }}>延迟+1</button>
        </p>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return <div>
      {/* <Counter></Counter> */}
      
      <div>          
          <div>
            <Link  to="/" >init</Link>|
            <Link to="/about">about</Link>|
            <Link to="/detail">detail</Link>|
            <Link to="/detail/react">detailreact</Link>|
            <Link to="/detail/vue">detailvue</Link>
          </div>
          <Route exact path="/" component={Counter}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/detail/:name" component={Detail}></Route>
        </div>
    </div>
  }
}

// const mapStatetoProps = state=>{
//   return {
//     num: state
//   }
// }

// const mapDispatchtoProps= (dispatch)=>({

// })

// App = connect(mapStatetoProps,mapDispatchtoProps)(App)

function About(){
  return <h2>关于页面</h2>
}

function Detail(props){
  const name = props.match.params.name
  if(name === 'vue'){
    return <Redirect to="/"></Redirect>
  }

  return <h2>详情页面 {props.match.params.name}</h2>
}

export default App;
