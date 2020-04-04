import React from "react"
import {bool, func} from "prop-types"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"



const Burger = ({open, setOpen}) => { 
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
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Burger