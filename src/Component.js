import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            counter: this.props.initialCounter
        }
    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
            </div>
        )
    }
}

export default SimpleComponent