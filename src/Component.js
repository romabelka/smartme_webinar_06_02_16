import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            counter: this.props.initialCounter
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <a href = "#" onClick = {this.handleClick}>increment</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    };
}

export default SimpleComponent
