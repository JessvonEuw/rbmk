import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import IndexStyles from "./index.module.scss"

const homePage = () => {
  return (
    <Layout>
      <div className={IndexStyles.content}>
        <div className={IndexStyles.footerPosition}>
          <Footer className={IndexStyles.footerPosition} />
        </div>
      </div>
    </Layout>
  )
}
export default homePage
