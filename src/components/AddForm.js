import React, {PureComponent} from 'react'
import { connect } from 'react-redux';
import { addPost } from '../actions'

class AddForm extends PureComponent {
    state = {
        imgUrl: null
    };

    handleChange(event) {
      this.setState({imgUrl: event.target.value})
    }

    handleAddImage = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      this.props.onAddPost(data);
      this.props.history.push('/')
    };

    render() {
        const image = this.state.imgUrl && <img className="card-img-top" src={this.state.imgUrl} alt="Card cap"/>;
        return (
            <div className={'row'}>
                <div className={'col-md-6 offset-md-3'}>
                    <div className="card">
                        {image}
                        <div className="card-body">
                            <form onSubmit={this.handleAddImage}>
                                <div className="form-group">
                                    <input className="form-control" name='url' onChange={this.handleChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" name='title'/>
                                </div>
                                <button type="submit" className="btn btn-primary">POST</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: data => {
      dispatch(addPost(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddForm)