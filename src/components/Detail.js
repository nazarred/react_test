import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions';



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
            <div className="card" style={{width: '50%'}}>
                <button
                    className='btn btn-danger'
                    onClick={() => this.handleDeleteImage(slug)}
                    style={{position: 'absolute'}}>
                    Delete
                </button>
                <img className="card-img-top" src={post.url} alt=''/>
                <div className="card-body">
                    {post.title}
                </div>
            </div>
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
