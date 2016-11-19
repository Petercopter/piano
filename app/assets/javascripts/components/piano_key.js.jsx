class PianoKey extends React.Component {

  render() {
    const activeClass = _.includes(this.props.scaleKeys.map(scaleKey=>scaleKey.id), this.props.pianoKey.id) ? 'active' : null
    const className = this.props.pianoKey.offset ? 'black' : 'white'
    const style = this.props.pianoKey.offset ? { left: `${this.props.pianoKey.offset}%` } : null

    return(
      <li className={[className, activeClass].join(' ')} style={style}>
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
