import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (

  <div className="video-player">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      frameborder="0"
      scrolling="no"
    />
  </div>
)
export default Video