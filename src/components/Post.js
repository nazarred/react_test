import React, {PureComponent} from 'react'
import { Link } from "react-router-dom";

class Post extends PureComponent {

    render() {
        const {imageUrl, title, index} = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
                <Link to={`/post/${index}`}>
                    <img className="card-img-top" src={imageUrl} alt="Card cap"/>
                </Link>
                    <div className="card-body">
                        <p className="card-text">{title}</p>
                    </div>
            </div>
        )
    }
}

export default Post