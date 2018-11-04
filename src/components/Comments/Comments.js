import React, {Component} from 'react';
import axios from 'axios';

import Comment from './Comment/Comment';
import Form from '../Comments/Form/Form';

class Comments extends Component{
  state = {
    comments: [],
    selectedCommentId: null,
    selectedComment: null
  };

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/fmabid/fake-data/comments')
      .then(response => {
        this.setState({comments: response.data});
        //console.log(response);
      });
  }

  commentEditHandler = (id, comment) => {
    this.setState({
      selectedCommentId: id,
      selectedComment: comment
    });
  };

  render() {
    const comments = this.state.comments.map(comment => {
      return <Comment
          key={comment.id}
          username={comment.username}
          text={comment.body}
          clicked={() => this.commentEditHandler(comment.id, comment.body)}/>;
    });

    return (


      <div>
        <p>Comments:</p>

        {comments} {/* All the comments*/}

        <Form
          id={this.state.selectedCommentId}
          comment={this.state.selectedComment}/>
      </div>
    );
  }
}

export default Comments;