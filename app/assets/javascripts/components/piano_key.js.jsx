class PianoKey extends React.Component {

  render() {
    return(
      <li className={this.props.pianoKey.color} key={this.props.index} style={this.props.pianoKey.color == 'black' ? {left: this.props.pianoKey.offset} : null}>
        <div className="key-label">
          {
            this.props.pianoKey.note.split(' ').map((note, index) =>
              <div key={index}>{note}</div>
            )
          }
        </div>
      </li>
    )
  }
}
