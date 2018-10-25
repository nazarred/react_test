import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'
import Post from './Post'


class Home extends Component {

  render() {
    const posts = this.props.posts.map((post, index) =>
            <div key = {index} >
                <Post index={index} imageUrl={post.url} title={post.title} slug={post.slug}/>
            </div>
        );

    return (
      <div className="container">
          <div className='d-flex flex-wrap' style={{height: '220px'}}>
            <Link to='/add' className='btn card align-text-bottom' style={{width: '18rem'}}>
                <span style={{marginTop: '85px'}}>New Post</span>
            </Link>
            {posts}
          </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState
  };
};

export default connect(mapStateToProps)(Home);