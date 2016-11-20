class PianoKey extends React.Component {

  render() {
    const activeClass = _.includes(this.props.scaleKeys.map(scaleKey=>scaleKey.id), this.props.pianoKey.id) ? 'active' : null
    const className = this.props.pianoKey.notes.length > 1 ? 'black' : 'white'

    return(
      <li className={[className, activeClass].join(' ')}>
        <div className="key-label">
          {
            this.props.pianoKey.notes.map((note, index) =>
              <div key={index}>{note.name}</div>
            )
          }
        </div>
      </li>
    )
  }
}
