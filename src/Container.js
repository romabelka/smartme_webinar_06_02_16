import React, { Component, PropTypes } from 'react'
import Article from './Article'

class SimpleComponent extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            counter: this.props.initialCounter,
            username: 'Roma'
        }
    }

    static propTypes = {
        initialCounter: PropTypes.number.isRequired
    }

    static childContextTypes = {
        username: PropTypes.string
    }

    getChildContext() {
        return {
            username: this.state.username
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <a href = "#" onClick = {this.handleClick}>increment</a>
                <h2>Article:</h2>
                <a href="#" onClick = {this.changeUser}>change user</a>
                <Article title = "some title" comments = {['comment 1', 'comment 2']}/>
            </div>
        )
    }

    changeUser = (ev) => {
        ev.preventDefault()
        this.setState({
            username: 'Vasya'
        })
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    };
}

export default SimpleComponent
