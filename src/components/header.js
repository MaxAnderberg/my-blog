import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Nav from './Nav';

const Header = () => (
  <header class="bg-white shadow">
      <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
