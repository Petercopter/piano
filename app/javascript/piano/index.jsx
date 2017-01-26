import _ from 'lodash'
import React from 'react'
import ReactBootstrap, { Col, Nav, NavItem, Panel, Row, Tab, Tabs } from 'react-bootstrap'
import ReactDOM from 'react-dom'


import PianoKeys from 'piano/piano_keys'

export default class Piano extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pitches: [],
      scale: {},
      scales: []
    }
  }

  componentWillMount() {
    $.getJSON('/pitches', (data) => this.setState({ pitches: data }))
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

      const categories = (
        <Tabs defaultActiveKey={1} id="category-tabs">
          <Tab eventKey={1} title="Pitches">Pitches</Tab>
          <Tab eventKey={2} title="Scales">Scales</Tab>
          <Tab eventKey={3} title="Chords">Chords</Tab>
        </Tabs>
      )

      const pitches = this.state.pitches.map((pitch) =>
        <Tab eventKey={pitch.id} key={pitch.id} title={pitch.name}>
          <h4>Scales</h4>
          <h4>Chords</h4>
        </Tab>
      )

      const scales = this.state.scales.map((scale) =>
        <li key={scale.id}>
          <a onClick={()=>{this.handleScaleClick(scale)}}>{[scale.pitch.name, scale.type].join(' ')}</a>
        </li>
      )

      const scaleTableHeaderCells = this.state.scale.piano_keys.map((key, index) =>
        <th key={index}>{key.name}</th>
      )

      const scaleTableFingerLeftCells = this.state.scale.piano_keys.map((key) =>
        <td className={`finger-${key.finger_left}`} key={key.id}>{key.finger_left}</td>
      )

      const scaleTableFingerRightCells = this.state.scale.piano_keys.map((key) =>
        <td className={`finger-${key.finger_right}`} key={key.id}>{key.finger_right}</td>
      )

      return(
        <div>
          <PianoKeys scaleKeys={this.state.scale.piano_keys}></PianoKeys>
          <Tabs defaultActiveKey={1} id="category-tabs" justified>
            <Tab eventKey={1} title="Pitches">
              <Tabs defaultActiveKey={this.state.pitches[0].id} id="pitch-tabs" justified>
                {pitches}
              </Tabs>
            </Tab>
            <Tab eventKey={2} title="Scales">Scales</Tab>
            <Tab eventKey={3} title="Chords">Chords</Tab>
          </Tabs>
          <ul className="list-unstyled">
            {scales}
          </ul>
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
      </div>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', event => {
  ReactDOM.render(
    <Piano />,
    document.getElementById('piano-root')
  )
})
