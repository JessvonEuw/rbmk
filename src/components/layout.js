import React from "react"
import Header from "./header"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
