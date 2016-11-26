import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import ReactOnRails from 'react-on-rails'

export default class PianoKey extends React.Component {

  render() {
    const activeClass = _.includes(this.props.scaleKeys.map(scaleKey=>scaleKey.id), this.props.pianoKey.id) ? 'active' : null
    const className = this.props.pianoKey.notes.length > 1 ? 'black' : 'white'
    const scaleKey = _.find(this.props.scaleKeys, { id: this.props.pianoKey.id })
    const fingerClasses = scaleKey ? `finger-${scaleKey.finger_left}` : null
    return(
      <li className={[className, activeClass, fingerClasses].join(' ')}>
        <div className="key-label">
          {
            this.props.pianoKey.notes.map((note, index) =>
              <div key={index}>{note.name}</div>
            )
          }
        </div>
      </li></div>
    )
  }
}
