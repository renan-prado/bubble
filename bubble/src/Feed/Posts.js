import React from 'react';
import Post from './Post'
import './feed.css'

class Posts extends React.Component {

  render(){
    return (
      <div className="feed__posts">

        <Post author="Larissa Flores" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo accusantium aliquam totam eligendi aliquid ex harum eum, deleniti, odio dolore eveniet quisquam accusamus saepe assumenda quidem, quo maxime nam." liked={true} />
        <Post author="Eduardo Costa" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo accusantium aliquam totam eligendi aliquid ex harum eum, deleniti, odio dolore eveniet quisquam accusamus saepe assumenda quidem, quo maxime nam." liked={false}/>
        <Post author="Maria Gadu" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illo accusantium aliquam totam eligendi aliquid ex harum eum, deleniti, odio dolore eveniet quisquam accusamus saepe assumenda quidem, quo maxime nam." liked={true} />

      </div>
    );
  }
}

export default Posts;
