import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'

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
                                <a className={headerStyles.links} href="https://www.youtube.com/">YT</a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.instagram.com/rbmk_band/">IG</a>
                            </li>
                            <li className={headerStyles.listItem}>
                                <img src="../images/fb-icon.svg" alt="FB" />
                            </li>
                            <li className={headerStyles.listItem}>
                                <a className={headerStyles.links} href="https://www.soundcloud.com">SC</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={headerStyles.centerSection}>
                <Link className={headerStyles.links} to="/"><img src="../images/logo.jpg" alt="RBMK"></img></Link>
            </div>
            <div className={headerStyles.rightSection}>
                <nav>
                    <ul className={headerStyles.list}>
                        <li className={headerStyles.listItem}>
                            <Link className={headerStyles.links} to="/theBand">The Band</Link>
                        </li>
                        <li className={headerStyles.listItem}>
                            <Link className={headerStyles.links} to="/bookUs">Book Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header



//  <a className={headerStyles.links} href="https://www.facebook.com">FB</a>
