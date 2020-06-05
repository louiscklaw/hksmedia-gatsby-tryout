import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {TAndCLayout} from '../components/layout'

function TAndCTemplate(props) {
  return(
    <TAndCLayout>
      <MDXProvider>
        {props.children}
      </MDXProvider>
    </TAndCLayout>
  )
}

export default TAndCTemplate