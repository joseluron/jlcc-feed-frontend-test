import React from 'react'
import PropTypes from 'prop-types'

const PostImage = ({ image, postType }) => {
    const fallbackImage = '/images/post-image-2.jpg';

    const getErrorImage = (e) => {
        console.log("Error: ", e);
        e.target.src = fallbackImage;
    }
    
    const getPostImage = () => {
        if (!image) {
            return (
                <div className="w-56 h-56">
                    <img src={fallbackImage} className="rounded-lg" onError={getErrorImage} />
                </div>
            )
        }
        
        if (postType === 'story') {
            return (
                <div className="w-56 h-56 relative">
                    <div style={{ 
                        backgroundImage: `url("${image}")`, 
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }} className="w-full h-full rounded-lg filter-blur" />
                    <div className="w-full h-full absolute inset-0 p-2 flex justify-center">
                        <img src={image} className="max-w-full max-h-full" onError={getErrorImage} />
                    </div>
                </ div>
            )
        }

        return (
            <div className="w-56 h-56">
                <img src={image} className="rounded-lg" onError={getErrorImage} />
            </div>
        )
    }
    
    return (
        <div className="w-full flex justify-center">
            {getPostImage()}
        </div>
    )
}

PostImage.propTypes = {
    image: PropTypes.string,
    postType: PropTypes.string
}

export default PostImage