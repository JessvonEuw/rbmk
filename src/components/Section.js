import React from "react"
import SectionStyles from "./section.module.scss"

const Section = props => {
  return (
    <div className={SectionStyles.container}>
      <div>{props.children}</div>
    </div>
  )
}

export default Section
