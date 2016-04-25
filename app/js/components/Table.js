import React from 'react'
import { Table as BootstrapTable, Button } from 'react-bootstrap'

class THead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          {
            this.props.data.map(function(row, id) {
              return <th key={id}>{row}</th>;
            })
          }
        </tr>
      </thead>
    );
  }
}

class TBody extends React.Component {
  render() {
    return (
      <tbody>
        {
          this.props.data.map((row, id) => {
            return <Tr key={id}
                     data={row}
                     editHandler={this.props.editHandler.bind(this, id)}
                     removeHandler={this.props.removeHandler.bind(this, id)}
                   />;
          })
        }
      </tbody>
    );
  }
}

class Tr extends React.Component {
  render() {
    return (
      <tr>
        {
          this.props.data.map(function(row, id) {
            return <td key={id}>{row}</td>;
          })
        }
        <td>
          <Button bsStyle="primary" onClick={this.props.editHandler}>Edit</Button>
          <Button bsStyle="danger" onClick={this.props.removeHandler}>Remove</Button>
        </td>
      </tr>
    );
  }
}

export default class Table extends React.Component {
  render() {
    return (
      <BootstrapTable striped bordered condensed hover>
        <THead data={this.props.headData}/>
        <TBody data={this.props.bodyData}
               editHandler={this.props.editHandler.bind(this)}
               removeHandler={this.props.removeHandler.bind(this)}
        />
      </BootstrapTable>
    );
  }
}
