import React, {PureComponent} from 'react'

class AddForm extends PureComponent {
    state = {
        imgUrl: null
    };

    handleChange(event) {
      this.setState({imgUrl: event.target.value})
    }

    render() {
        const handleAddImage = this.props.handleAddImage;
        const image = this.state.imgUrl && <img className="card-img-top" src={this.state.imgUrl} alt="Card cap"/>;
        return (
            <div className="card" style={{width: '50%'}}>
                {image}
                <div className="card-body">
                    <form onSubmit={handleAddImage}>
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
        )
    }
}

export default  AddForm