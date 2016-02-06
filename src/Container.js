import React, { Component, PropTypes } from 'react'
import Article from './Article'

class SimpleComponent extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            counter: this.props.initialCounter
        }
    }

    static propTypes = {
        initialCounter: PropTypes.number.isRequired
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <a href = "#" onClick = {this.handleClick}>increment</a>
                <h2>Article:</h2>
                <Article title = "some title" comments = {['comment 1', 'comment 2']}/>
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
