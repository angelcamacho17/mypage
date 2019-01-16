import React, { Component } from 'react';
import { Grid, Row, Col,Image} from 'react-bootstrap';
import './About.css'


class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image"/>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
          	<Image src="assets/person-1.jpg" className="about-profile-pic" rounded/>
          	<h3>Enrique</h3>
          	<p>Lorem ipsum dolor sit amet, dolore animal commune et eos, mea menandri facilisis</p>
          	<p>definiebas te. Vim ei quis putent, delenit habemus usu an, at enim vitae noster </p>
          	<p>nec. Has cu dicunt integre pertinax, tibique constituam ei mei. Elit reque primis</p>
          	<p>duo te. Pericula erroribus dissentiet has ex. Mei ad amet tamquam legimus.</p>
            <p>Lorem ipsum dolor sit amet, dolore animal commune et eos, mea menandri facilisis</p>
          	<p>definiebas te. Vim ei quis putent, delenit habemus usu an, at enim vitae noster </p>
          	<p>nec. Has cu dicunt integre pertinax, tibique constituam ei mei. Elit reque primis</p>
          	<p>duo te. Pericula erroribus dissentiet has ex. Mei ad amet tamquam legimus.</p>
          
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;