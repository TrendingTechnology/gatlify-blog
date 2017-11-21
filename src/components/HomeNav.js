import React from 'react'
import Link from 'gatsby-link'
import githubLogo from '../img/github-icon-white.svg'

const HomeNav = ( { isHome } ) => 
    <nav className="site-nav">
        <div className="site-nav-left">
            <ul className="nav" role="menu">
                <li role="menuitem">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/tags">
                        Tags
                    </Link>
                </li>
            </ul>
        </div>
        <div className="site-nav-right">
            <a className="github-logo" href="https://github.com/Harrison1/netlify-gatsby-blog" >
                <img src={ githubLogo } alt="github logo" />
            </a>
        </div>
    </nav>

export default HomeNav