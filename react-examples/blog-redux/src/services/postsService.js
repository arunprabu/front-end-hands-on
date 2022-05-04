/*
  What's the HTTP client? 
    axios  // npm i axios 
*/

import axios from "axios";
import { ADD_POST, GET_POSTS } from "../actions/types";

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Step 12: Have the service function 
export const createBlogPost = (formData) => {
  console.log(formData);
  return (dispatch) => {
    // AJAX call to add a post
    return axios.post(POSTS_API_URL, formData )
      .then(response => {
        console.log(response);
        console.log(dispatch); 

        //TODO: show success msg in UI using react-redux-toastr package
        alert("Saved Successfully!")
        // dispatch to hit the reducer
        dispatch({
          type: ADD_POST,
          payload: response.data
        })
      })
      .catch((error) => {
        //TODO: show error msg in UI using react-redux-toastr package
        throw (error);
      })
      .finally( () => {
        
      }) 
  };
}

// Step 18: Have the service function 
// will be called during initial Load to fetch all posts
export const getBlogPosts = () => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.get(POSTS_API_URL )
      
      .then(response => {
        
        console.log(response);
        console.log(dispatch); 
        // dispatch to hit the reducer
        dispatch({
          type: GET_POSTS,
          payload: response.data
        })
      })
      .catch((error) => {
        //TODO: show error msg in UI using react-redux-toastr package
        throw (error);
      })
      .finally( () => {
        
      }) 
  };
}