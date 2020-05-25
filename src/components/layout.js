import React from "react"
import Header from "./header"
import layoutStyles from "./layout.module.scss"

const Layout = ({ location, children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header location={location} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
