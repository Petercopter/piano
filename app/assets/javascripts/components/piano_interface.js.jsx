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
    $.getJSON('/scales/2', (data) => this.setState({ scale: data }))
  }

  handleScaleClick(scale, event) {
    $.getJSON(`/scales/${scale.id}`, (data) => this.setState({ scale: data }))
  }

  render() {
    if(_.isEmpty(this.state.scale)) {
      return null
    } else {

      const { Col, Panel } = ReactBootstrap

      const notesDisplayItems = this.state.scale.keys.map((key, index) =>
        <li key={index}>
          <strong>{key.name}</strong>
          <br />
          {key.finger_left}
          <br />
          {key.finger_right}
        </li>
      )

      const scales = this.state.scales.map((scale) =>
        <li key={scale.id}>
          <a onClick={()=>{this.handleScaleClick(scale)}}>{[scale.note.name, scale.type].join(' ')}</a>
        </li>
      )

      return(
        <div>
          <PianoKeys scaleKeys={this.state.scale.keys}></PianoKeys>
          <Panel>
            <Col xs={6}>
              <ul className="list-unstyled">
                {scales}
              </ul>
            </Col>
            <Col xs={6}>
              <ul className='list-inline'>
                <li>
                  &nbsp;
                  <br />
                  <strong>L</strong>
                  <br />
                  <strong>R</strong>
                </li>
                {notesDisplayItems}
              </ul>
            </Col>
          </Panel>
        </div>
      )
    }
  }
}
