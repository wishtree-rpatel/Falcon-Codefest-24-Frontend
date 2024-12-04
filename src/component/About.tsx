import React from 'react'
import { Logger } from '../logger/Logger'

const About = () => {
  Logger.info("loging info")
  Logger.debug("Debugging log");
  Logger.error("Error log")
  return (
    <div>
      <h1>This is Protected Page</h1>
    </div>
  )
}

export default About