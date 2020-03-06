import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import AboutStyles from "./about.module.scss"

const aboutPage = () => {
  return (
    <Layout>
      <div className={AboutStyles.content}>
        <Section>
          <h1 className={AboutStyles.header}>About</h1>
          <p className={AboutStyles.text}>
            Carrot cake bear claw pudding sweet roll. Dessert ice cream bonbon
            gingerbread jelly-o. Gummi bears sesame snaps chocolate bar candy
            macaroon lollipop chocolate. Jelly beans bonbon donut dessert gummi
            bears tiramisu marshmallow dragée. Candy powder macaroon cheesecake
            sweet bonbon dragée donut brownie.
          </p>
          <p className={AboutStyles.text}>
            Bonbon lollipop cotton candy jelly carrot cake sweet sweet danish
            cookie. Cotton candy biscuit chocolate bar caramels. Wafer dragée
            lemon drops brownie dragée soufflé cheesecake chocolate.{" "}
          </p>
        </Section>
      </div>
    </Layout>
  )
}
export default aboutPage
