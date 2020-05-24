import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import IndexStyles from "./index.module.scss"
import logo from "../images/logo.svg"

const homePage = () => {
  return (
    <Layout>
      <div className={IndexStyles.content}>
        <img className={IndexStyles.logo} src={logo} alt="RBMK"></img>
        <div className={IndexStyles.footerPosition}>
          <Footer className={IndexStyles.footerPosition} />
        </div>
      </div>
    </Layout>
  )
}
export default homePage
