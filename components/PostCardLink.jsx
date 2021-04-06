import React from 'react'
import PropTypes from 'prop-types'

const PostCardLink = ({ post }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      Link: <a href={post.permalink_url} target="_blank">{post.permalink_url}</a>
    </div>
  )
}

PostCardLink.propTypes = {
  post: PropTypes.object
}

export default PostCardLink
