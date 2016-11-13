class Piano extends React.Component {
  render() {
    const notes = [
      {
        name: 'C',
        type: 'natural'
      },
      {
        name: 'D♭ C♯',
        type: 'sharp-flat',
        offset: '4.5%'
      },
      {
        name: 'D',
        type: 'natural'
      },
      {
        name: 'E♭ D♯',
        type: 'sharp-flat',
        offset: '11%'
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
        name: 'G♭ F♯',
        type: 'sharp-flat',
        offset: '23.5%'
      },
      {
        name: 'G',
        type: 'natural'
      },
      {
        name: 'A♭ G♯',
        type: 'sharp-flat',
        offset: '30.5%'
      },
      {
        name: 'A',
        type: 'natural'
      },
      {
        name: 'B♭ A♯',
        type: 'sharp-flat',
        offset: '37%'
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
        name: 'D♭ C♯',
        type: 'sharp-flat',
        offset: '50.5%'
      },
      {
        name: 'D',
        type: 'natural'
      },
      {
        name: 'E♭ D♯',
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
        name: 'G♭ F♯',
        type: 'sharp-flat',
        offset: '70%'
      },
      {
        name: 'G',
        type: 'natural'
      },
      {
        name: 'A♭ G♯',
        type: 'sharp-flat',
        offset: '77%'
      },
      {
        name: 'A',
        type: 'natural'
      },
      {
        name: 'B♭ A♯',
        type: 'sharp-flat',
        offset: '83.5%'
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
    const noteItems = notes.map((note, index) =>
      <li className={note.type} key={index} style={note.type == 'sharp-flat' ? {left: note.offset} : null}>
        {
          note.name.split(' ').map((pitch, index) =>
            <div key={index}>{pitch}</div>
          )
        }
      </li>
    )
    return(
      <ul id="piano">
        {noteItems}
      </ul>
    )
  }
}
