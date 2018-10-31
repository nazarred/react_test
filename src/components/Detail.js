import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions';
import { Col, Row, Card, CardImg, Button } from 'react-bootstrap'



const buttonStyle = {
    position: 'absolute',
    margin: '5px'
};



class Detail extends PureComponent {

    handleDeleteImage(slug) {
      this.props.onDeletePost(slug);
      this.props.history.push('/')
    }

    render() {
        const { posts } = this.props;
        const slug = this.props.match.params.slug;
        const post = posts.filter(post => post.slug === slug)[0];
        //TODO: return 404 if post=undefined
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Button
                            bsPrefix="btn-danger"
                            onClick={() => this.handleDeleteImage(slug)}
                            style={buttonStyle}>
                            Delete
                        </Button>
                        <CardImg src={post.url} alt=''/>
                        <Card variant="body">
                            {post.title}
                        </Card>
                    </Card>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: slug => {
      dispatch(deletePost(slug));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Detail)
