import React, { Component, PropTypes } from 'react'

class NewComment extends Component {
    static propTypes = {

    };
    state = {
        text: ''
    }

    static contextTypes = {
        username: PropTypes.string
    }

    render() {
        return (
            <div>
                <input value = {this.state.text} onChange = {this.handleChange}/>
                <a href = "#" onClick = {this.addComment}>add comment</a>
                by {this.context.username}
            </div>
        )
    }

    handleChange= (ev) => {
        this.setState({
            text: ev.target.value
        })
    };

    addComment = (ev) => {
        ev.preventDefault()
        this.props.addComment(this.state.text)
    }
}

export default NewComment