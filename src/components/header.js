import React, {useState} from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "../images/logo.svg"
import ham from "../images/ham-menu.png"

import Icon from "../images/headerIcons"


/*const [open, setOpen] = useState(false);*/

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.leftSection}>
                <div className={headerStyles.socialsIcons}>
                    <ul className={headerStyles.list}>
                        <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.youtube.com/">
                                  <Icon name="youtube" />
                                </a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.instagram.com/rbmk_band/">
                                  <Icon name="instagram" />
                                </a>
                            </li>
                            <li className={headerStyles.listItem}>
                              <a className={headerStyles.links} href="https://www.facebook.com">
                                <Icon name="facebook" />                               
                              </a> 
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.soundcloud.com/rbmk.band">
                                  <Icon name="soundcloud" />
                                </a>
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
     {/*} <div className = {headerStyles.hamburgerMenu}>
          <Link onClick={() => setOpen(true)} open={open}>
            <img src={ham} alt="="></img>
          </Link> 
      </div>
    */}
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

function OpenHamburgerMenu({open, setOpen}) {
  return (
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
  )
}
