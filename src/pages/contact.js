import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import ContactStyles from "./contact.module.scss"

const aboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={ContactStyles.content}>
        <Section>
          <h1 className={ContactStyles.header}>Talk to Us</h1>
          <p className={ContactStyles.title}>Email</p>
          <p className={ContactStyles.text}>info@rbmkband.com</p>
          <p className={ContactStyles.title}>Phone</p>
          <p className={ContactStyles.text}>(555) 555 5555</p>
        </Section>
      </div>
    </Layout>
  )
}
export default aboutPage
