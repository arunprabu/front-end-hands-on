import React from 'react'
import CreatePostForm from '../containers/CreatePostForm'
import PostList from '../containers/PostList'

const Posts = () => {
  return (
    <div className='container'>
      <div className='row'>
        <CreatePostForm />

        <PostList />
      </div>
    </div>
  )
}

export default Posts