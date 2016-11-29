import React from 'react'
import { render } from 'react-dom'

import Piano from 'piano/piano'

// Collection of components shared in rails views, this constant remains private
const RailsViewComponents = { Piano }

// Find all the elements we'd like to inject react components into
const dynamicInjectionElements = document.querySelectorAll('[data-inject-react-class]')

// Only iterate if there's any element
if (dynamicInjectionElements !== null)
  dynamicInjectionElements.forEach(element => {
    const componentName = element.getAttribute('data-inject-react-class');

    const ReactComponent = ((str) => {
      if (typeof str !== 'string')
        throw new TypeError('must pass in type of string/')

      if (str.match(/\W|\d/))
        throw new SyntaxError(`${str}: must pass in a valid Javascript name.`)

      const component = RailsViewComponents[str]
      if (!component)
        throw `Invalid component: \`${componentName}\` does not exist.`

      return component
    })(componentName)

    const props = JSON.parse(element.getAttribute('data-react-props'))
    render(<ReactComponent {...props} />, element)
  })
