import React from 'react'
import store from './kstore'

class App extends React.Component{
    render(){
        return <div>
            <p>{store.getState()}</p>
            <button onClick={()=>store.dispatch({type: 'add'})}>+</button>
        </div>
    }
}