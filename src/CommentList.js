import React, { Component, PropTypes } from 'react'
import NewComment from './NewComment'

class Comment extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        const comments = this.props.comments.map((comment) => {
            return <li key={comment}>{comment}</li>
        })
        return (
            <div>
                comments:
                <ul>{comments}</ul>
                <NewComment />
            </div>
        )
    }
}

export default Comment