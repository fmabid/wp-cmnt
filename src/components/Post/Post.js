import React, { Component } from 'react';

import classes from './Post.css';
import image from '../../logo.svg';
import Comment from "../Comment/Comment";

class Post extends Component{
  render() {
    return (
      <div className={classes.PostBody}>
        <div>
          <img src={image} className={["rounded", "float-left", classes.img_thumb].join(' ')} width="40px"/>
        </div>

        <div className={classes.name}>
          <p>Hiring test</p>
        </div>

        <div className={["text-justify", classes.status].join(' ')}>
          The goal is to create a dynamic WordPress comment module to be able to insert new Wordpress comments to the post where the shortcode is displayed within a WordPress plugin. So something like: “[dynamic-comments/]”, would output your frontend app.
          The app, is a copy of the existing WordPress comment form, can be even simplified, your call. No need to support comment deletion and parent comments. Just a dynamic form that let the user post new comments and edit his comments. Everything should be done asynchronously.
          This quick application should be build in either Vue.js, React or Angular, whatever you prefer. The markup should be wrapped within a Wordpress shortcode defined by a plugin.
          Pay attention on the design, UI and UX of this app.
          Note that the plugin is just a structure, nothing fancy needed, just the shortcode definition and AJAX request handler to update and insert the comments.
          If you’re not a WordPress expert, that’s fine, Stack Overflow and the WordPress Codex page have all examples to complete this mission. If you’ve no PHP knowledge or not enough to complete this, please skip the backend part and use your creativity to show the difference by making a way more
          complete comment frontend app.
        </div>

        <hr/>

        <Comment/>
      </div>
    );
  }
}

export default Post;