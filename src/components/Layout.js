import React from "react"
import layoutStyles from "./Layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
