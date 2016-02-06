import React, { Component, PropTypes } from 'react'

class NewComment extends Component {
    static propTypes = {

    };

    static contextTypes = {
        username: PropTypes.string
    }

    render() {
        return (
            <div>
                <input />
                by {this.context.username}
            </div>
        )
    }
}

export default NewComment