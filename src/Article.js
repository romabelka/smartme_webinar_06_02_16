import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        title: PropTypes.string,
        comments: PropTypes.array
    };

    render() {
        return (
            <div>
                {this.props.title}
                <CommentList comments = {this.props.comments} />
            </div>
        )
    }
}

export default Article