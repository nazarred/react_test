import React, {PureComponent} from 'react'
import { Col, Row, Card, FormGroup, FormControl, Button } from 'react-bootstrap'

import { connect } from 'react-redux';
import { addPost } from '../actions'

class AddForm extends PureComponent {
    state = {
            imgUrl: null
        };

    handleImgChange = (event) => {
      this.setState({imgUrl: event.target.value})
    };

    handleAddImage = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      this.props.onAddPost(data);
      this.props.history.push('/')
    };

    render() {
        const image = this.state.imgUrl && <img className="card-img-top" src={this.state.imgUrl} alt="Card cap"/>;
        return (
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        {image}
                        <div className="card-body">
                            <form onSubmit={this.handleAddImage}>
                                <FormGroup >
                                    <FormControl name='url' onBlur={this.handleImgChange}/>
                                </FormGroup>
                                <FormGroup >
                                    <FormControl name='title'/>
                                </FormGroup>
                                <Button type="submit" bsPrefix="btn-danger">POST</Button>
                            </form>
                        </div>
                    </Card>
                </Col>
            </Row>
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