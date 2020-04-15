import React from 'react';
import Post from './Post'
import './feed.css'

import { getPosts, userLogged, readProfile } from '../Firebase';

class Posts extends React.Component {

  state = {
    userId: false,
    arrayPosts: false,
    posts: [],
  }

  componentDidMount(){
    userLogged(user => {
      if(user){
        this.setState({ userId: user.id })
      }

      this.getAllPosts();
    });
  }

  getAllPosts = () => {

    getPosts(posts => {
      
      let postsKeys = Object.keys(posts);
      let arrayPosts = [];
      let temp;

      postsKeys.forEach(post => {
          temp = posts[post];
          temp.id = post;
          arrayPosts.push(temp);
      });

      this.setState({ arrayPosts: arrayPosts.reverse() });
      this.getUserPost();
    });

  }

  getUserPost = async () => {

    const { userId } = this.props;

    let total = (this.state.arrayPosts).length;
    let arrayPosts = [];
    this.setState({ posts: []});

    this.state.arrayPosts.forEach((post, i) => {

      readProfile(post.userId, user => {
        post.username = user.username;
        post.image = user.image;

        if(typeof userId === 'undefined'){
          arrayPosts.push(post);
        }

        else {
          if(userId === post.userId)
            arrayPosts.push(post);
        }

        if(total === i + 1){
          this.setState({ posts: arrayPosts.reverse() });
          this.hasLiked();
        }

      });

    });

  }

  hasLiked = () => {
    
    const userId =this.state.userId;
    let likesKeys,
    posts = this.state.posts;

    this
      .state
      .posts
      .forEach((post, indexPost) => {

        if(typeof post.likes === 'undefined') return;

        likesKeys = Object.keys(post.likes);

        likesKeys.forEach(like => {

          post = {
            ...post,
            liked: post.liked || like === userId
          };
          readProfile(like, profile => {

            post.likes[like] = {
              ...post.likes[like],
              image: profile.image
            }

            posts[indexPost] = post;
            this.setState({ posts });
          })

        });
      });
  }

  render(){


    return (
      <div className="feed__posts">

        {
          this.state.posts.map((post, i) => {
            return (
              <Post
                key={i}
                id={post.id}
                image={post.image}
                author={post.username}
                text={post.msg}
                liked={post.liked}
                likes={post.likes}
                userLogged={this.state.userId}
              />
            )
          })
        }

      </div>
    );
  }
}

export default Posts;
