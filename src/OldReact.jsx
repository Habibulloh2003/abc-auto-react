import React, { Component } from 'react';
import ReactHooks from './ReactHooks'

class ReactOld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            status: ''
        }
    }
    render() {
        return (
            <>
                <ReactHooks />
                <h1>React Old State {this.state.counter}</h1>
                <input placeholder='status' value={this.state.value} onChange={(e) => { this.setState(e.target.value) }} />
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </>
        )
    }
}

export default ReactOld;