import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import AddForm from './components/AddForm'
import Detail from './components/Detail'
import Home from './components/Home'

class App extends Component {
  state = {
    posts: [],
    redirect_to: null,
    index: 0
  };

  handleDeleteImage = (index) => {
      console.log('******', index);
      const posts = this.state.posts.slice();
      posts.splice(index, 1);
      this.setState({
          redirect_to: '/',
          posts: posts
      })
  };

  handleAddImage = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const posts = this.state.posts.slice();

      this.setState({
          redirect_to: '/',
          posts: posts.concat([
              {
                  url: data.get('url'),
                  title: data.get('title')
              }
          ]),
      });

  };


  render() {
        console.log('******', this.state.posts);
        if (this.state.redirect_to) {
            this.setState({
                  redirect_to: null,
              });
            return <Redirect to={this.state.redirect_to} push/>;
     }
    return (

        <div className='container'>
            <Switch>
                  <Route
                      exact path='/'
                      render={() => <Home posts={this.state.posts} />}
                  />
                  <Route
                      path='/add'
                      render={() => <AddForm handleAddImage={this.handleAddImage} />}
                  />
                  <Route
                      path='/post/:number'
                      render={(props) => <Detail
                          {...props}
                          posts = {this.state.posts}
                          handleDeleteImage={this.handleDeleteImage}
                      />}
                  />
              </Switch>
      </div>


    );
  }
}

export default App;
