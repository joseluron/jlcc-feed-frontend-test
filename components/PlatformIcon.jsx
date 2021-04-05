import React from 'react'
import PropTypes from 'prop-types'

import brandColors from '@/constants/brandColors'

import FacebookIcon from '@/FacebookIcon'
import InstagramIcon from '@/InstagramIcon'

const PlatformIcon = ({ platform }) => {
    switch(platform) {
        case 'facebook':
            return <FacebookIcon className="h-4 w-auto" fill={brandColors[platform].bg} />
        case 'instagram':
            return <InstagramIcon className="h-4 w-auto" fill={brandColors[platform].bg} />
        default:
            return <FacebookIcon className="h-4 w-auto" fill={brandColors[platform].bg} />
    }
}

PlatformIcon.propTypes = {
    platform: PropTypes.string,
}

PlatformIcon.defaultProps = {
    platform: 'facebook',
}

export default PlatformIcon