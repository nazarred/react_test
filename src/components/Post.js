import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Col, Row, Card, CardImg, Button } from 'react-bootstrap'

const Post = ({imageUrl, title, slug}) => {

    return(
            <Card style={{width: '18rem'}}>
                <Link to={`/post/${slug}`}>
                    <CardImg src={imageUrl} alt="Card cap"/>
                </Link>
                    <Card>
                        <Card>{title}</Card>
                    </Card>
            </Card>
    )
};

export default Post