import React from 'react';
// import './../stylesheets/Home.scss';
// import HeroBanner from './../components/HeroBanner';
import { useTranslation } from 'react-i18next';

function Home () {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* <HeroBanner></HeroBanner> */}
            <div className="main-page-hero-banner">
              {t('hablemos_espanol')}
            </div>
        </>
    );
}

export default Home;