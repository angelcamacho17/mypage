import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css'


class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to my page</h2>
          <p>This is how I build a webosite with react, react-router and react bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary" >Learn more</Button>
          </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
           <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-1.jpg" circle className="profile-pic"/>
              <h3>Enrique</h3>
              <p>That's a crooked tree. We'll send him to Washinton. These little</p>
          </Col>
           <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-2.jpg" circle className="profile-pic"/>
              <h3>Valeria</h3>
              <p>Thats a crooked tree. Well send him to Washinton. These little</p>
          </Col>
           <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/person-3.jpg" circle className="profile-pic"/>
              <h3>Augusto</h3>
              <p>That's a crooked tree. We'll send him to Washinton. These little</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
