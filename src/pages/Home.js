import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { useTranslation } from 'react-i18next';

function Home () {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header whiteStyle={false} transparent={true}></Header>
            <div className="main-page-hero-banner">
              {t('hablemos_espanol')}
            </div>
            <Footer></Footer>
        </>
    );
}

export default Home;