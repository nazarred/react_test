import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'
import Post from './Post'


class Home extends Component {

  render() {
    console.log(this.props);
    const posts = this.props.posts.map((post, index) =>
            <div key = {index} >
                <Post index={index} imageUrl={post.url} title={post.title}/>
            </div>
        );

    return (
      <div className="container">
          <div className='d-flex flex-wrap' style={{height: '220px'}}>
            <Link to='/add' className='btn card' style={{width: '18rem'}}>New Post</Link>
            {posts}
          </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState.posts
  };
}

export default connect(mapStateToProps)(Home);