import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import { useTranslation } from 'react-i18next';

function Home () {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header whiteStyle={true} transparent={true}></Header>
            <HeroBanner
                title={t("home_hero_title")}
                subtitle={t("home_hero_subtitle")}
                buttonText={t("home_hero_button")}
                buttonUrl="/cursos"
                verticalAlignment="bottom"
                horizontalAlignment="left"
                hasBigTitle={false}
                withBottomMargin={false}
                imageUrl="/images/bg/background_home.jpeg"
                backgroundYPosition="90%"></HeroBanner>
            <Footer></Footer>
        </>
    );
}

export default Home;