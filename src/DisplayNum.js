import React from 'react'
import {connect} from 'react-redux'

@connect(state=>({num: state}))
class DisplayNum extends React.Component{
    render(){
        return <h2>{this.props.num}</h2>
    }
}

export default DisplayNum