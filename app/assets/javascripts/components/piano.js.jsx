class Piano extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: props.notes
    }

    this.pianoKeys = [
      {
        note: 'C',
        color: 'white'
      },
      {
        note: 'C♯ D♭',
        color: 'black',
        offset: '4%'
      },
      {
        note: 'D',
        color: 'white'
      },
      {
        note: 'D♯ E♭',
        color: 'black',
        offset: '11%'
      },
      {
        note: 'E',
        color: 'white'
      },
      {
        note: 'F',
        color: 'white'
      },
      {
        note: 'F♯ G♭',
        color: 'black',
        offset: '23.5%'
      },
      {
        note: 'G',
        color: 'white'
      },
      {
        note: 'G♯ A♭',
        color: 'black',
        offset: '30.5%'
      },
      {
        note: 'A',
        color: 'white'
      },
      {
        note: 'A♯ B♭',
        color: 'black',
        offset: '37.5%'
      },
      {
        note: 'B',
        color: 'white'
      },
      {
        note: 'C',
        color: 'white'
      },
      {
        note: 'C♯ D♭',
        color: 'black',
        offset: '50.5%'
      },
      {
        note: 'D',
        color: 'white'
      },
      {
        note: 'D♯ E♭',
        color: 'black',
        offset: '57.5%'
      },
      {
        note: 'E',
        color: 'white'
      },
      {
        note: 'F',
        color: 'white',
      },
      {
        note: 'F♯ G♭',
        color: 'black',
        offset: '70.5%'
      },
      {
        note: 'G',
        color: 'white'
      },
      {
        note: 'G♯ A♭',
        color: 'black',
        offset: '77.5%'
      },
      {
        note: 'A',
        color: 'white'
      },
      {
        note: 'A♯ B♭',
        color: 'black',
        offset: '84%'
      },
      {
        note: 'B',
        color: 'white'
      },
      {
        note: 'C',
        color: 'white'
      }
    ]
  }

  render() {
    const pianoKeyItems = this.pianoKeys.map((pianoKey, index) =>
      <PianoKey pianoKey={pianoKey} key={index} />
    )
    return(
      <div id="piano-wrapper">
        <ul id="piano">
          {pianoKeyItems}
        </ul>
      </div>
    )
  }
}
