class Piano extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: props.notes
    }
    this.notes = [
      {
        name: 'C',
        type: 'natural'
      },
      {
        name: 'C♯ D♭',
        type: 'sharp-flat',
        offset: '4%'
      },
      {
        name: 'D',
        type: 'natural'
      },
      {
        name: 'D♯ E♭',
        type: 'sharp-flat',
        offset: '11%'
      },
      {
        name: 'E',
        type: 'natural'
      },
      {
        name: 'F',
        type: 'natural'
      },
      {
        name: 'F♯ G♭',
        type: 'sharp-flat',
        offset: '23.5%'
      },
      {
        name: 'G',
        type: 'natural'
      },
      {
        name: 'G♯ A♭',
        type: 'sharp-flat',
        offset: '30.5%'
      },
      {
        name: 'A',
        type: 'natural'
      },
      {
        name: 'A♯ B♭',
        type: 'sharp-flat',
        offset: '37.5%'
      },
      {
        name: 'B',
        type: 'natural'
      },
      {
        name: 'C',
        type: 'natural'
      },
      {
        name: 'C♯ D♭',
        type: 'sharp-flat',
        offset: '50.5%'
      },
      {
        name: 'D',
        type: 'natural'
      },
      {
        name: 'D♯ E♭',
        type: 'sharp-flat',
        offset: '57.5%'
      },
      {
        name: 'E',
        type: 'natural'
      },
      {
        name: 'F',
        type: 'natural',
      },
      {
        name: 'F♯ G♭',
        type: 'sharp-flat',
        offset: '70.5%'
      },
      {
        name: 'G',
        type: 'natural'
      },
      {
        name: 'G♯ A♭',
        type: 'sharp-flat',
        offset: '77.5%'
      },
      {
        name: 'A',
        type: 'natural'
      },
      {
        name: 'A♯ B♭',
        type: 'sharp-flat',
        offset: '84%'
      },
      {
        name: 'B',
        type: 'natural'
      },
      {
        name: 'C',
        type: 'natural'
      }
    ]
  }
  render() {
    const noteItems = this.notes.map((note, index) =>
      <li className={note.type} key={index} style={note.type == 'sharp-flat' ? {left: note.offset} : null}>
        <div className="key-label">
          {
            note.name.split(' ').map((pitch, index) =>
              <div key={index}>{pitch}</div>
            )
          }
        </div>
      </li>
    )
    return(
      <div id="piano-wrapper">
        <ul id="piano">
          {noteItems}
        </ul>
      </div>
    )
  }
}
