import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "../sass/main.scss"
import PropTypes from "prop-types"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
