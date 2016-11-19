class PianoInterface extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      scale: {},
      scales: []
    }
  }

  componentWillMount() {
    $.getJSON('/scales', (data) => this.setState({ scales: data }))
  }

  handleScaleClick(scale, event) {
    $.getJSON(`/scales/${scale.id}`, (data) => this.setState({ scale: data }))
  }

  render() {
    const { Panel } = ReactBootstrap

    const scales = this.state.scales.map((scale) =>
      <li key={scale.id}>
        <a onClick={()=>{this.handleScaleClick(scale)}}>{[scale.note.name, scale.type].join(' ')}</a>
      </li>
    )

    return(
      <div>
        <PianoKeys scaleKeys={this.state.scale.keys}></PianoKeys>
        <Panel>
          <ul className="list-unstyled">
            {scales}
          </ul>
        </Panel>
      </div>
    )
  }
}
