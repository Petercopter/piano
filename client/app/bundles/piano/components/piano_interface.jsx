import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import { Col, Panel, Row } from 'react-bootstrap'
import ReactOnRails from 'react-on-rails'

import PianoKeys from '../components/piano_keys'

export default class PianoApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      scale: {},
      scales: []
    }
  }

  componentWillMount() {
    $.getJSON('/scales', (data) => this.setState({ scales: data }))
    $.getJSON('/scales/1', (data) => this.setState({ scale: data }))
  }

  handleScaleClick(scale, event) {
    $.getJSON(`/scales/${scale.id}`, (data) => this.setState({ scale: data }))
  }

  render() {
    if(_.isEmpty(this.state.scale)) {
      return null
    } else {

      const scales = this.state.scales.map((scale) =>
        <li key={scale.id}>
          <a onClick={()=>{this.handleScaleClick(scale)}}>{[scale.note.name, scale.type].join(' ')}</a>
        </li>
      )

      const scaleTableHeaderCells = this.state.scale.keys.map((key, index) =>
        <th key={index}>{key.name}</th>
      )

      const scaleTableFingerLeftCells = this.state.scale.keys.map((key) =>
        <td className={`finger-${key.finger_left}`} key={key.id}>{key.finger_left}</td>
      )

      const scaleTableFingerRightCells = this.state.scale.keys.map((key) =>
        <td className={`finger-${key.finger_right}`} key={key.id}>{key.finger_right}</td>
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
              <table className="scale-table">
                <thead>
                  <tr>
                    <th></th>
                    {scaleTableHeaderCells}
                    <th><i className="fa fa-border fa-eye-slash"></i> No Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>L</td>
                    {scaleTableFingerLeftCells}
                    <td><i className="fa fa-border fa-eye"></i> Show Left</td>
                  </tr>
                  <tr>
                    <td>R</td>
                    {scaleTableFingerRightCells}
                    <td><i className="fa fa-border fa-eye"></i> Show Right</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Panel>
        </div>
      )
    }
  }
}

ReactOnRails.register({ PianoApp });
