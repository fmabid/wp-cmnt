import React, {Component} from 'react';

import classes from "./Comment.css";
import image from "../../../logo.svg";

class Comment extends Component{
  render() {
    return (
      <div className={[classes.comment_body].join(' ')}>
        <div>
          <img src={image} className={["rounded", "float-left", classes.img_thumb].join(' ')} width="40px"/>
        </div>

        <div className={["block"].join(' ')}>
          <p className={[classes.username, "text-left"].join(' ')}>{this.props.username}</p>

          <div className={["text-left", classes.cmnt_txt].join(' ')}>
            {this.props.text}
          </div>

          <span
            className={["badge", "badge-pill", "badge-secondary", classes.edit_cmnt].join(' ')}
            onClick={this.props.clicked}>Edit Comment</span>
        </div>
      </div>
    );
  }
}

export default Comment;