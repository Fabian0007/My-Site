import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

type IProps = {
  siteTitle: string,
}

const Header: React.FC<IProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `#202324`,
      paddingTop: `1.45rem`,
      textAlign: 'center',
      fontFamily: 'sans-serif',
      fontSize: '22px',
      color:'#e8e6e3',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      width: '100%'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'inline-block'
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        HOME
      </Link>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'inline-block'
      }}
    >
      <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        BLOG
      </Link>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'inline-block'
      }}
    >
      <Link
        to="/projects"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        PROJECTS
      </Link>
    </div>
  </header>
);

export default Header;
