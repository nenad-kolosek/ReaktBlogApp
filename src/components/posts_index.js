import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{

  componentWillMount(){
    console.log('This would be a good time to call an action creator to fetch posts');
    this.props.fetchPosts();
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);