import React from 'react'
import "./PreLoader.css"

const PreLoader = () => {
  return (
    <div className="preload" data-preload>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  )
}

export default PreLoader;