/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Layout from './layout'

const MainPageLayout = ({ children }) => {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  )
}

MainPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainPageLayout
