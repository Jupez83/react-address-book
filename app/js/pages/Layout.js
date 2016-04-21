import React from "react";
import { Link } from "react-router";
import TopNavbar from '../components/Layout/TopNavbar'
import { Grid, Row, Col } from "react-bootstrap"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <Grid>
            <Row>
              <Col md={12}>
                {this.props.children}
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
