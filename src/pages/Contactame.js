import React, { Component } from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import UnderConstruction from './../components/UnderConstruction';

export default class Contactame extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div>
        <Header whiteStyle={false} transparent={false}></Header>
        <UnderConstruction></UnderConstruction>
        <Footer></Footer>
      </div>
    )
  }
}
