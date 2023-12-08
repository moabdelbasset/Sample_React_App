import React, { Component } from 'react'
import UserMessage from './UserMessage'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data loaded!' : 'Loading...'}</h1>
        <UserMessage isLoggedIn={this.state.isLoggedIn}/>
        
        
      </div>
    )
  }
}

export default NestingComponents