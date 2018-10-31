import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'

import Post from './Post'

const mainRowStyle = {
    height: '220px'
};

const linkStyle = {
    width: '18rem'
};


class Home extends Component {

  render() {
    const posts = this.props.posts.map((post, index) =>
            <div key = {index} >
                <Post index={index} imageUrl={post.url} title={post.title} slug={post.slug}/>
            </div>
        );

    return (
      <Container>
          <div className='d-flex flex-wrap' style={mainRowStyle}>
            <Link to='/add' className='btn card align-text-bottom' style={{width: '18rem'}}>
                <span style={{marginTop: '85px'}}>New Post</span>
            </Link>
            {posts}
          </div>
      </Container>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState
  };
};

export default connect(mapStateToProps)(Home);