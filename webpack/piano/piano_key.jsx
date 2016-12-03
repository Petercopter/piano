import _ from 'lodash'
import React from 'react'

export default class PianoKey extends React.Component {

  render() {
    const activeClass = _.includes(this.props.scaleKeys.map(scaleKey=>scaleKey.id), this.props.pianoKey.id) ? 'active' : null
    const className = this.props.pianoKey.pitches.length > 1 ? 'black' : 'white'
    const scaleKey = _.find(this.props.scaleKeys, { id: this.props.pianoKey.id })
    // const fingerClasses = scaleKey ? `finger-${scaleKey.finger_left}` : null
    const fingerClasses = null
    return(
      <li className={[className, activeClass, fingerClasses].join(' ')}>
        <div className="piano-key-label">
          {
            this.props.pianoKey.pitches.map((pitch, index) =>
              <div key={index}>{pitch.name}</div>
            )
          }
        </div>
      </li>
    )
  }
}
