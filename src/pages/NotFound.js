import React from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';

export default function NotFound() {
  return (
    <div>
      <Header whiteStyle={false} transparent={false}></Header>
      <HeroBanner
        title={"404 Not found"}
        verticalAlignment="bottom"
        horizontalAlignment="right"
        hasBigTitle={true}
        withBottomMargin={false}
        imageUrl="/images/bg/background_404.jpeg"
        backgroundYPosition="40%"
        isShortHero={false}></HeroBanner>
      <Footer></Footer>
    </div>
  )
}
