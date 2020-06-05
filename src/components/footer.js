import React from 'react'

import '../scss/styles.scss'

function Footer(){
  return(
    <footer style={{backgroundColor:'green'}}>
      <div class="footer-content">
        <div class="footer-upper-deck">
          <div class="footer-left">
            <div class="site-map">
              <img src="/sitemap.png" />
            </div>
          </div>

          <div class="footer-right">
            <img src="/xlogo.png.pagespeed.ic.M7OcTo5TJW_footer.png" />
          </div>

        </div>

        <div class="footer-lower-deck">
            all right reserved
        </div>

      </div>

    </footer>
  )
}

export default Footer