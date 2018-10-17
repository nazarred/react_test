import React, {PureComponent} from 'react'

class Detail extends PureComponent {

    render() {
        const {posts, handleDeleteImage} = this.props;
        const index = this.props.match.params.number;
        const post = posts[index];
        return (
            <div className="card" style={{width: '50%'}}>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteImage(index)}
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

export default  Detail