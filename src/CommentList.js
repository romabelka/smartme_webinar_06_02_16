import React, { Component, PropTypes } from 'react'
import NewComment from './NewComment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    state = {
        newComments : []
    }

    render() {
        const comments = this.props.comments.concat(this.state.newComments).map((comment) => {
            return <li key={comment}>{comment}</li>
        })
        return (
            <div>
                comments:
                <ul>{comments}</ul>
                <NewComment addComment = {this.addComment} />
            </div>
        )
    }

    addComment = (comment) => {
        this.setState({
            newComments: this.state.newComments.concat(comment)
        })
    }
}

export default CommentList