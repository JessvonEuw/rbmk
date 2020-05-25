import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import AboutStyles from "./about.module.scss"

const aboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={AboutStyles.content}>
        <Section>
          <h1 className={AboutStyles.header}>About</h1>
          <p className={AboutStyles.text}>
            Summer 2019 saw a coalescing of some friends that would give life to
            RBMK. With their infectious melodies, engaging lyrics, and complex
            four-voice harmonies, these artists boast nearly a century of
            combined musical experience. Their energising, genre-defying sound
            will have you on your feet and shouting for more. Whether you find
            yourself caught in the waves of crashing overtones of “The Storm” or
            reliving the unanticipated electricity of an impetuous romance in
            “Man With a Plan,” RBMK offers both the escapism we crave and the
            introspection we need.
          </p>
        </Section>
      </div>
    </Layout>
  )
}
export default aboutPage
