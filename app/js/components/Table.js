import React from 'react'
import { Table as BootstrapTable } from 'react-bootstrap'

class THead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.data.map(function(row, id) {
            return <th key={id}>{row}</th>;
          })}
        </tr>
      </thead>
    );
  }
}

class TBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.data.map(function(row, id) {
          return <Tr key={id} data={row} />;
        })}
      </tbody>
    );
  }
}

class Tr extends React.Component {
  render() {
    return (
      <tr>
        {this.props.data.map(function(row, id) {
          return <td key={id}>{row}</td>;
        })}
      </tr>
    );
  }
}

export default class OwnTable extends React.Component {
  render() {
    return (
      <BootstrapTable striped bordered condensed hover>
        <THead data={this.props.headData}/>
        <TBody data={this.props.bodyData}/>
      </BootstrapTable>
    );
  }
}
