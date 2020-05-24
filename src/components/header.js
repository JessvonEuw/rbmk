import React, { useState } from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "../images/logo.svg"
import Icon from "../images/headerIcons"
import BurgerMenu from "./burger"

const Header = () => {
  const [open, setOpen] = useState(false)
  function IsHomePage() {
    if (window.location.pathname !== "/") {
      return (
        <div className={headerStyles.centerSection}>
          <Link className={headerStyles.logoLinks} to="/">
            <img src={logo} alt="RBMK"></img>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.leftSection}>
        <div className={headerStyles.socialsIcons}>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>
              <a
                className={headerStyles.links}
                href="https://www.youtube.com/channel/UCEz4ejRyIzClwBmBZmV3htg"
              >
                <Icon name="youtube" />
              </a>
            </li>
            <li className={headerStyles.listItem}>
              <a
                className={headerStyles.links}
                href="https://www.instagram.com/rbmk.band/"
              >
                <Icon name="instagram" />
              </a>
            </li>
            <li className={headerStyles.listItem}>
              <a
                className={headerStyles.links}
                href="https://www.facebook.com/RBMK-Band-114374710250620/"
              >
                <Icon name="facebook" />
              </a>
            </li>
            <li className={headerStyles.listItem}>
              <a
                className={headerStyles.links}
                href="https://soundcloud.com/user-417592303"
              >
                <Icon name="soundcloud" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <IsHomePage />
      <div className={headerStyles.rightSection}>
        <nav>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>
              <Link className={headerStyles.links} to="/about">
                The Band
              </Link>
            </li>
            <li className={headerStyles.listItem}>
              <Link className={headerStyles.links} to="/contact">
                Book Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={headerStyles.hamburgerMenu}>
        <div onClick={() => setOpen(!open)}>
          <Icon name="ham" />
        </div>
        {open && <BurgerMenu />}
      </div>
    </div>
  )
}

export default Header
