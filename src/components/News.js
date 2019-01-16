import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css'


class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image"/>
      	<Grid>
      	 <h2>News</h2>
      	 <Row>
      	  <Col xs={12} sm={8} className="main-section">
      	    <p>Lorem ipsum dolor sit amet, dolore animal commune et eos, mea menandri facilisis</p>
          	<p>definiebas te. Vim ei quis putent, delenit habemus usu an, at enim vitae noster </p>
          	<p>nec. Has cu dicunt integre pertinax, tibique constituam ei mei. Elit reque primis</p>
          	<p>duo te. Pericula erroribus dissentiet has ex. Mei ad amet tamquam legimus.</p>
            <p>Lorem ipsum dolor sit amet, dolore animal commune et eos, mea menandri facilisis</p>
          	<p>definiebas te. Vim ei quis putent, delenit habemus usu an, at enim vitae noster </p>
          	<p>nec. Has cu dicunt integre pertinax, tibique constituam ei mei. Elit reque primis</p>
          	<p>duo te. Pericula erroribus dissentiet has ex. Mei ad amet tamquam legimus.</p>
           </Col>
           <Col xs={12} sm={4} className="sidebar-section">
           <Image src="assets/mountain-man.jpg" />
             <p>duo te. Pericula erroribus dissentiet has ex. Mei ad amet tamquam legimus.</p>
           </Col>
      	 </Row>
      	</Grid>
      </div>
    );
  }
}

export default News;  