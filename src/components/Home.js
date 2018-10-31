import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { Container, Row, Button } from 'react-bootstrap'


import Post from './Post'

const mainRowStyle = {
    height: '220px'
};

const linkStyle = {
    width: '18rem'
};

const buttonStyle ={
    marginTop: '85px'
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
          <Row style={mainRowStyle}>
            <Link to='/add' className='btn card' style={linkStyle}>
                <Button style={buttonStyle}>New Post</Button>
            </Link>
            {posts}
          </Row>
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