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
        <a className={headerStyles.hamLinkyLinks} to="https://www.youtube.com/channel/UCEz4ejRyIzClwBmBZmV3htg">
          YouTube
        </a>
        <a className={headerStyles.hamLinkyLinks} to="https://www.instagram.com/rbmk_band/">
          Instagram
        </a>

        <a className={headerStyles.hamLinkyLinks} to="https://www.facebook.com/RBMK-Band-114374710250620/">
          Facebook
        </a>

        <a className={headerStyles.hamLinkyLinks} to="https://soundcloud.com/user-417592303">
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