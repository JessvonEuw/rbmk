import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "../images/logo.svg"
import fbicon from "../images/fb-icon.svg"
import igicon from "../images/ig-icon.svg"
import yticon from "../images/yt-icon.svg"
import scicon from "../images/sc-icon.svg"
import ham from "../images/ham-menu.png"

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.leftSection}>
                <div className={headerStyles.socialsCover}>
                        <ul className={headerStyles.list}>
                            <li className={headerStyles.listItem}>
                            <Link className={headerStyles.links}>Socials</Link>
                            </li>
                        </ul>
                </div>
                <div className={headerStyles.socialsIcons}>
                    <ul className={headerStyles.list}>
                        <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.youtube.com/"><img className={headerStyles.icons} src={yticon} alt="YT"></img><label className={headerStyles.mobileLabel}>YouTube</label></a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.instagram.com/rbmk_band/"><img src={igicon} alt="IG"></img><label className={headerStyles.mobileLabel}>Instagram</label></a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.facebook.com/"><img src={fbicon} alt="FB"></img><label className={headerStyles.mobileLabel}>Facebook</label></a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.soundcloud.com/rbmk.band"><img src={scicon} alt="SC"></img><label className={headerStyles.mobileLabel}>SoundCloud</label></a>
                            </li>
                        </ul>
                </div>
            </div>
            <isHomePage />
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
      <div className = {headerStyles.hamburgerMenu}>
          <Link className={headerStyles.links} to="/">
            <img src={ham} alt="R"></img>
          </Link> 
      </div>
      <div className = {headerStyles.hamLinks}>
                <p>
                    <Link className={headerStyles.links} to="/theBand">
                      The Band
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="/bookUs">
                      Book Us
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="https://www.youtube.com/">
                      YouTube
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="https://www.instagram.com/rbmk_band/">
                      Instagram
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="https://www.facebook.com/">
                      Facebook
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="https://www.soundcloud.com/rbmk.band">
                      SoundCloud
                    </Link>
                  </p>
                  <p>
                    <Link className={headerStyles.links} to="/">
                      Home Page
                    </Link>
                  </p>
          </div>
    </div>
      )
}

export default Header

function isHomePage() {
    if (window.location.pathname !== '/') {
        return (
            <div className={headerStyles.centerSection}>
                <Link className={headerStyles.links} to="/"><img src={logo} alt="RBMK"></img></Link>
            </div>
        );
    } else {
        return null;
    }
}
