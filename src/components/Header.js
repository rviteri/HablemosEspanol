import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

function Header () {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="navbar">
              <div className="logo-container">
                <Link to="/" className="navbar-logo">
                    {t("hablemos_espanol")}
                </Link>
              </div>
              <div className="menu-container">
                <Link to="/cursos" className="navbar-link">
                    {t("cursos")}
                </Link>
                <Link to="/contactame" className="navbar-link">
                    {t("contactame")}
                </Link>
                <Link to="/inscripcion" className="regular-button -short">
                    {t("inscripcion")}
                </Link>
              </div>
            </div>
        </>
    );
}

export default Header;