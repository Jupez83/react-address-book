import React from 'react'
import { Grid, Row, Col } from "react-bootstrap"

import TopNavbar from '../components/Layout/TopNavbar'

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
