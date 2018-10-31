import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions';


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
            <div className={'row'}>
                <div className={'col-md-6 offset-md-3'}>
                    <div className="card p-3">
                        <button
                            className='btn btn-danger'
                            onClick={() => this.handleDeleteImage(slug)}
                            style={buttonStyle}>
                            Delete
                        </button>
                        <img className="card-img-top" src={post.url} alt=''/>
                        <div className="card-body">
                            {post.title}
                        </div>
                    </div>
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
