/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../../scss/styles.scss"
import {Nav} from '../../components/nav'
import Footer from '../footer'

function TAndCLayout({children}){
  React.useEffect(()=>{
    window.addEventListener( 'scroll', ( e ) => {
      let page_position = document.querySelector( 'html' ).scrollTop
      if ( page_position != 0 ) {
        document.querySelector( '.navbar-brand .company-logo' ).classList.add( 'scrolled-up-logo' )
        document.querySelector('.indcies').setAttribute('style','display: none;')

        document.querySelector( '.navbar' ).classList.add( 'navbar-flex-scrolled-up' )
      } else {
        document.querySelector( '.navbar-brand .company-logo' ).classList.remove( 'scrolled-up-logo' )
        document.querySelector( '.navbar' ).classList.remove( 'navbar-flex-scrolled-up' )
        document.querySelector('.indcies').setAttribute('style','display: block;')
      }
    } )
  })

  return(
    <>
      <div class="left-middle-right">
        <div class="left"></div>
        <div class="middle">
          <div class="top">
            <Nav/>
          </div>
          <div class="center">
            <main>{children}</main>
          </div>
          <div class="bottom"></div>

        </div>
        <div class="right"></div>
      </div>
      <Footer />
    </>
  )
}

TAndCLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TAndCLayout
