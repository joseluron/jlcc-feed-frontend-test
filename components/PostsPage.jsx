import React from 'react'

import PostCard from '@/PostCard'
import Sidepanel from '@/Sidepanel'

import fetchPosts from '../api/fetchPosts'

const PostsPage = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(async () => {
    const posts = await fetchPosts()
    setPosts(posts)
  }, [])

  const [sidepanelContent, setSidepanelContent] = React.useState(null)

  const setPostPromotion = (postIndex) => {
    const allPosts = [...posts]

    let toModifyPost = {...allPosts[postIndex]};

    toModifyPost.promotion_enabled = !toModifyPost.promotion_enabled;

    allPosts[postIndex] = toModifyPost;

    setPosts(allPosts);
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {posts.map((post, index) => {
          return <PostCard post={post} postIndex={index} setPostPromotion={setPostPromotion} setSidepanelContent={setSidepanelContent} key={index} />
        })}
      </div>
      <Sidepanel content={sidepanelContent} setContent={setSidepanelContent} />
    </>
  )
}

export default PostsPage
