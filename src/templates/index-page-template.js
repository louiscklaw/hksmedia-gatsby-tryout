import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {IndexPageLayout} from '../components/layout'

function IndexPageTemplate(props) {
  return(
    <IndexPageLayout>
      <MDXProvider>
        {props.children}
      </MDXProvider>
    </IndexPageLayout>
  )
}

export default IndexPageTemplate