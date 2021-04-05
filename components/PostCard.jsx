import React from 'react'
import PropTypes from 'prop-types'

import PlatformIcon from '@/PlatformIcon'
import CustomDate from '@/CustomDate'
import PostImage from '@/PostImage'
import LinkIcon from '@/LinkIcon'
import TickIcon from '@/TickIcon'
import InsightsIcon from '@/InsightsIcon'
import PostCardData from '@/PostCardData'
import PostCardLink from '@/PostCardLink'

import brandColors from '@/constants/brandColors'

const PostCard = ({ post, postIndex, setPostPromotion }) => {
  return (
    <div className="col-span-3">

      <div>
        <PlatformIcon platform={post.platform} />
        <CustomDate date={new Date(post.published_time)}/>
      </div>

      <div className="rounded-dialogue mb-4">
        <PostImage image={post.thumbnails[0].url} postType={post.post_type} />
      </div>
      <div className="p-2 border border-solid border-green">
        <p>Score</p>
        <p>{post.engagement_score}</p>
      </div>

      <button
        className="bg-blue p-2"
        onClick={() => 
          setPostPromotion(postIndex)
        }
      >
        <p>Enable</p>
        <div className="w-5 h-5 p-1 bg-white">
          {post.promotion_enabled && (
            <TickIcon className="w-full h-auto" fill={brandColors.blue} />
          )}
        </div>
      </button>

      {/* TODO: make both buttons equal size but keep the same gap between them. */}
      <div className="flex">
        <button
          className="h-12 bg-green mr-6 flex-grow"
          onClick={() => {
            // TODO: open the sidepanel with PostCardLink as its content
            console.log('Open PostCardLink')
          }}
        >
          <LinkIcon className="w-4 h-auto" />
        </button>
        <button
          className="h-12 bg-green flex-grow"
          onClick={() => {
            // TODO: open the sidepanel with PostCardData as its content
            console.log('Open PostCardData')
          }}
        >
          <InsightsIcon className="w-4 h-auto" />
        </button>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object,
  postIndex: PropTypes.number,
  setPostPromotion: PropTypes.func
}

export default PostCard
