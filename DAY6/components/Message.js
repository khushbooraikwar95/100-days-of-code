import React, {Component} from 'react'
import App from '../App'

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message :'Welcome Khushboo!'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Thankyou for subscribing'
        })
    }
    render(){
        return( <div>
         <h1>{this.state.message}</h1>
        <button onClick = {()=>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message