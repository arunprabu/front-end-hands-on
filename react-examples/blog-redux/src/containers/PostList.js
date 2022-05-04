import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Step 16: Let's work on subscribing to the data from the store 
import { connect } from 'react-redux';
import { getBlogPosts } from '../services/postsService';

export class PostList extends Component {

  componentDidMount(){
    this.props.dispatch(getBlogPosts())
  }

  render() {
    console.log(this.props);
    // Step 17: Let's loop thru the posts  
    let posts = null; 
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        return (
          <div className="list-group-item list-group-item-action text-start" key={index}> 
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">{post.body}</p>
          </div>
        )
      })
    }

    return (
      <div className='col-md-8'>
        <h2>Post List</h2>
        <div className="list-group text-start">
          { this.props.posts && this.props.posts.length > 0 ? 
            posts
            :
            <div className='alert alert-warning'>
              Post Not Found! You can add one.
            </div>
          }
        </div>
      </div>
    )
  }
}

// Step 16 continues... 
// we need to get the state data from the store and convert that to props 
const mapStateToProps = ( state ) => { // state will carry the store data
  console.log(state);
  
  return {
    posts: state.posts // posts is the name of the props -- and state.posts is the data arriving from store
  }
}

export default connect( mapStateToProps )(PostList);