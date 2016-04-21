import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Link to={'/contacts'}>Contacts</Link>
      </div>
    );
  }
}
