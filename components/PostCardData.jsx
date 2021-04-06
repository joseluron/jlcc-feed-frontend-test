import React from 'react'
import PropTypes from 'prop-types'

const PostCardData = ({ post }) => {
  const getMetricsData = () => {
    let metricsData = {};
    const { metrics } = post;

    Object.keys(metrics).map(metricKey => {
      Object.values(metrics[metricKey].data).map(metricValue => {
        if(!metricsData[metricKey]) {
          metricsData[metricKey] = metricValue;
        } else {
          metricsData[metricKey] += metricValue;
        }
      });
    });

    return metricsData;
  }
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col justify-evenly items-center rounded-full border border-solid border-green w-28 h-28">
          <span className="capitalize">Score</span>
          <span className="font-bold">{post.engagement_score}</span>
        </div>
        <div className="border border-solid border-green flex flex-col justify-evenly rounded-lg">
          {Object.keys(getMetricsData()).map(metric => {
            return (
              <div className={`p-2 flex justify-between flex-grow ${metric === "impressions" ? "border-t border-b border-solid border-green" : ""}`} key={metric} >
                <span className="capitalize">{metric}</span>
                <span className="ml-20 font-bold">{getMetricsData()[metric]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

PostCardData.propTypes = {
  post: PropTypes.object
}

export default PostCardData
