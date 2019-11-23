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
                                <Link className={headerStyles.links}>1</Link>
                            </li>
                            <li className={headerStyles.listItem}>
                                <Link className={headerStyles.links}>2</Link>
                            </li>
                            <li className={headerStyles.listItem}>
                                <Link className={headerStyles.links}>3</Link>
                            </li>
                            <li className={headerStyles.listItem}>
                                <Link className={headerStyles.links}>4</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
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