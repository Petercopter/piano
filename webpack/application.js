// THIS STILL NEEDS TO BE UPDATED

import React from 'react'
import {render} from 'react-dom'

import Piano from 'piano/piano'

// Collection of components shared in rails views, this constant remains private
const RailsViewComponents = { Piano }

// Find all the elements we'd like to inject react components into
const dynamicInjectionElements = document.querySelectorAll('[data-inject-react-class]')

// Only iterate if there's any element
if (typeof dynamicInjectionElements === "object" && dynamicInjectionElements.length > 0) {
  for (let i=0; i < dynamicInjectionElements.length; i++ ) {
    const element = dynamicInjectionElements[i]
    // THIS retarded comparison is only here because phantomjs screws up the array from querySelectorAll
    // by doing one of the following:
    //
    // 1. return [undefined]
    // 2. return undefined
    // 3. returns [object NodeList]
    //
    // It does this all the time and mixes valid node objects with invalid ones (undefined mainly)
    // https://github.com/ariya/phantomjs/issues/13161 - this was reported in April 2015 and it's still a bug
    if (element) {
      const componentName = element.getAttribute('data-inject-react-class')
      const props = JSON.parse(element.getAttribute('data-react-props'))

      const ReactComponent = ((str) => {
        if (typeof str !== 'string')
          throw new TypeError('must pass in type of string.')

        if (str.match(/\W|\d/))
          throw new SyntaxError(`${str}: must pass in a valid Javascript name.`)

        const component = RailsViewComponents[str]

        if (!component)
          throw `Invalid component: \`${str}\` does not exist.`

        return component
      })(componentName)

      render(<ReactComponent {...props} />, element)
    }
  }
}
