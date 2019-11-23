import React from 'react'
import { Link } from 'gatsby'
import '../styles/header.css'

const Header = () => {
    return (
        <div class="header">
            <div class="header-left">
                <div class="socials-cover">
                    <nav>
                        <ul>
                            <li>
                            <Link>Socials</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="socials-icons">
                    <nav>
                        <ul>
                            <li>
                                <Link>1</Link>
                            </li>
                            <li>
                                <Link>2</Link>
                            </li>
                            <li>
                                <Link>3</Link>
                            </li>
                            <li>
                                <Link>4</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="header-right">
                <nav>
                    <ul>
                        <li>
                        <Link to="/theBand">The Band</Link>
                        </li>
                        <li>
                        <Link to="/bookUs">Book Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header