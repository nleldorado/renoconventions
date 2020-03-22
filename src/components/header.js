import PropTypes from "prop-types"
import React from "react"
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Header = () => (
  <header>
    <Navigation/>
    <MobileNavigation/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
