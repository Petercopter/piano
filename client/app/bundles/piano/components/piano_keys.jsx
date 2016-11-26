import React from 'react'

import PianoKey from '../components/piano_key'

export default class PianoKeys extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pianoKeys: []
    }
  }

  static defaultProps = {
    scaleKeys: []
  }

  componentWillMount() {
    $.getJSON('/keys', (data) => this.setState({pianoKeys: data }))
  }

  render() {
    const pianoKeyItems = [this.state.pianoKeys.map((pianoKey) =>
      <PianoKey key={pianoKey.id} pianoKey={pianoKey} scaleKeys={this.props.scaleKeys} />
    )]
    return(
      <div id="piano-wrapper">
        <ul id="piano">
          {pianoKeyItems}
        </ul>
      </div>
    )
  }
}
