import React from 'react'
import PropTypes from 'prop-types'

const CustomDate = ({ date }) => {
    const ALL_MONTHS = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
    }
    
    const customDay = date.getDate()
    const customMonth = ALL_MONTHS[date.getMonth()]
    const customYear = date.getFullYear();

    return <p>{`${customDay} ${customMonth} ${customYear}`}</p>
}

CustomDate.propTypes = {
    PlatformIcon: PropTypes.instanceOf(Date),
}

CustomDate.defaultProps = {
    PlatformIcon: new Date(),
}

export default CustomDate