import React, { Component } from 'react';
// Step 10:
// Let's work getting the dispatch fn from the store
import { connect } from 'react-redux';
import { ADD_POST } from '../actions/types';
import { createBlogPost } from '../services/postsService';

class CreatePostForm extends Component {

  // Step 9; Let's work on form submission logic
  // so that we can dispatch an action with the action type being ADD_POST and form data as payload 
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.postTitle.value);
    console.log(this.postContent.value);

    // let's have submittable form data
    let blogPostData  = {
      title: this.postTitle.value,
      body: this.postContent.value
    }
    console.log(blogPostData); // we have to dispatch an action with this data as payload

    // Step 11:  It is time to dispatch actions from form submission logic 
    // connect() helps props have dispatch fn
    // using it we can dispatch an action with type and payload

    console.log(this.props); // you can find dispatch fn

    // Step 13: Let's dispatch with service fn
    this.props.dispatch(createBlogPost(blogPostData))
    
  }

  render() {

    return (
      <div className='col-md-4'>
        <h2>Create Blog Post</h2>
        <form className='text-start' onSubmit={this.handleSubmit}>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' 
            ref={(postTitleInput) => this.postTitle = postTitleInput} /><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control' 
            ref={(postDescInput) => this.postContent = postDescInput} /><br />

          <button className='btn btn-primary' type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

//Step 10 continues.. last line of the component should be the following. 
// after connecting props will be available in this component
// inside props you can find dispatch fn
export default connect()(CreatePostForm)

