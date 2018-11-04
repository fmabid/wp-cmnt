import React, { Component } from 'react';

import classes from './Post.css';
import image from '../../logo.svg';
import Comments from "../Comments/Comments";

class Post extends Component{
  render() {
    return (
      <div className={classes.PostBody}>
        <div>
          <img src={image} className={["rounded", "float-left", classes.img_thumb].join(' ')} width="50px"/>
        </div>

        <div className={classes.username}>
          <p>Hiring test</p>
        </div>

        <div className={["text-justify", classes.status].join(' ')}>
          The goal is to create a dynamic WordPress comment module to be able to insert new Wordpress comments to the post where the shortcode is displayed within a WordPress plugin. So something like: “[dynamic-comments/]”, would output your frontend app.
          The app, is a copy of the existing WordPress comment form, can be even simplified, your call. No need to support comment deletion and parent comments. Just a dynamic form that let the user post new comments and edit his comments. Everything should be done asynchronously.
          This quick application should be build in either Vue.js, React or Angular, whatever you prefer.
        </div>

        <hr/>

        <Comments/>
      </div>
    );
  }
}

export default Post;