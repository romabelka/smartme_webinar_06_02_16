import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {
        title: PropTypes.string,
        comments: PropTypes.array
    };

    shouldComponentUpdate(newProps, newState) {
        return this.props.title != newProps.title
    }

    render() {
        if (!this.props.title) return <h3>No title</h3>
        return (
            <div>
                {this.props.title}
                <CommentList comments = {this.props.comments} />
            </div>
        )
    }
}

export default Article