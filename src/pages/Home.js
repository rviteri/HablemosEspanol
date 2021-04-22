import React from 'react';
// import './../stylesheets/Home.scss';
import Header from './../components/Header';
import { useTranslation } from 'react-i18next';

function Home () {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Header></Header>
            <div className="main-page-hero-banner">
              {t('hablemos_espanol')}
            </div>
        </>
    );
}

export default Home;