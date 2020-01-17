import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import logo from "../images/logo.svg"
import fbicon from "../images/fb-icon.svg"
import igicon from "../images/ig-icon.svg"
import yticon from "../images/yt-icon.svg"
import scicon from "../images/sc-icon.svg"

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.leftSection}>
        <div className={headerStyles.socialsCover}>
          <nav>
            <ul className={headerStyles.list}>
              <li className={headerStyles.listItem}>
                <Link className={headerStyles.links}>Socials</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={headerStyles.socialsIcons}>
          <nav>
            <ul className={headerStyles.list}>
              <li className={headerStyles.listItem}>
                <a
                  className={headerStyles.links}
                  href="https://www.youtube.com/"
                >
                  <img
                    className={headerStyles.icons}
                    src={yticon}
                    alt="YT"
                  ></img>
                </a>
              </li>
              <li className={headerStyles.listItem}>
                <a
                  className={headerStyles.links}
                  href="https://www.instagram.com/rbmk_band/"
                >
                  <img src={igicon} alt="IG"></img>
                </a>
              </li>
              <li className={headerStyles.listItem}>
                <a
                  className={headerStyles.links}
                  href="https://www.facebook.com/"
                >
                  <img src={fbicon} alt="FB"></img>
                </a>
              </li>
              <li className={headerStyles.listItem}>
                <a
                  className={headerStyles.links}
                  href="https://www.soundcloud.com"
                >
                  <img src={scicon} alt="SC"></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={headerStyles.centerSection}>
        <Link className={headerStyles.links} to="/">
          <img src={logo} alt="RBMK"></img>
        </Link>
      </div>
      <div className={headerStyles.rightSection}>
        <nav>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>
              <Link className={headerStyles.links} to="/theBand">
                The Band
              </Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link className={headerStyles.links} to="/bookUs">
                Book Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header

// react prop isLogo for other pages - conditional rendering
