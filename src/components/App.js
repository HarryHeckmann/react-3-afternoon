import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

const baseUrl = 'https://practiceapi.devmountain.com/api'

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    axios
      .get(baseUrl+'/posts')
      .then(response => {
        console.log(response.data)
        this.setState({posts: response.data})
      })
  }

  updatePost(id, text) {
    axios
      .put(baseUrl+'/posts?id='+id, {text})
      .then(response => {
        this.setState({posts: response.data})
        console.log(response.data)
      })
  }

  deletePost(id) {
    axios
      .delete(baseUrl+'/posts?id='+id)
      .then(response => {
        this.setState({posts: response.data})
      })
  }

  createPost(text) {
    axios
      .post(baseUrl+'/posts', {text})
      .then(response => {
        this.setState({posts: response.data})
      })
  }

  render() {
    const { posts } = this.state;
    // console.log(this.state.posts.length && this.state.posts[1].date)
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose 
            createPostFn={this.createPost}
          />
          {posts.map((e, i) => (
             <Post 
                key={i} 
                text={this.state.posts[i].text} 
                date={this.state.posts[i].date} 
                id={this.state.posts[i].id}
                updatePostFn={this.updatePost} 
                deletePostFn={this.deletePost} 
              />
          ))}
        </section>
      </div>
    );
  }
}

export default App;


// date={this.posts[i].date}