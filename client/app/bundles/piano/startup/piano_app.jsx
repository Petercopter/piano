import React from 'react'
import ReactOnRails from 'react-on-rails'

import PianoInterface from '../components/piano_interface'

// _railsContext is the Rails context, providing contextual information for rendering
const PianoApp = (props, _railsContext) => (
  <PianoInterface {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ PianoApp })
