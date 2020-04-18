import React from "react"
import {bool, func} from "prop-types"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"



const Burger = ({open}) => { 
    return (
        <div className = {headerStyles.hamLinks}>

        <Link className={headerStyles.hamLinkyLinks} to="/theBand">
          The Band
        </Link>
        <Link className={headerStyles.hamLinkyLinks} to="/bookUs">
          Book Us
        </Link>
        <a className={headerStyles.hamLinkyLinks} to="https://www.youtube.com/">
          YouTube
        </a>
        <a className={headerStyles.hamLinkyLinks} to="https://www.instagram.com/rbmk_band/">
          Instagram
        </a>

        <a className={headerStyles.hamLinkyLinks} to="https://www.facebook.com/">
          Facebook
        </a>

        <a className={headerStyles.hamLinkyLinks} to="https://www.soundcloud.com/rbmk.band">
          SoundCloud
        </a>

        <Link className={headerStyles.hamLinkyLinks} to="/">
          Home Page
        </Link>
  
  </div>
    )
}
Burger.propTypes = {
    open: bool.isRequired
  };

export default Burger