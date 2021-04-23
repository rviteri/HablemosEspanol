import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { MenuOutline, CloseOutline } from 'react-ionicons'

function Header ({whiteStyle = false}) {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerWhiteStyle, setHeaderWhiteStyle] = useState(whiteStyle);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setHeaderWhiteStyle(true);
        } else {
            setHeaderWhiteStyle(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div className={`navbar ${menuOpen ? "-menu-open" : ""} ${headerWhiteStyle ? "-white" : ""}`}>
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
                {!menuOpen ?
                    <div className="mobile-menu-container" onClick={toggleMenu}>
                        <MenuOutline
                            color={headerWhiteStyle ? '#000000' : '#FFFFFF'} 
                            title={"menu"}
                            height="40px"
                            width="40px"/>
                    </div>
                :
                    <div className="mobile-menu-container" onClick={toggleMenu}>
                        <CloseOutline
                            color={'#000000'} 
                            title={"close"}
                            height="40px"
                            width="40px"/>
                    </div>

                }

                <div className="nav-mobile-menu">
                    <ul className="nav-menu-list">
                        <li className="nav-menu-list-item">
                            <Link to="/cursos" className="nav-links" onClick={closeMobileMenu}>
                                {t("cursos")}
                            </Link>
                        </li>
                        <li className="nav-menu-list-item">
                            <Link to="/contactame" className="nav-links" onClick={closeMobileMenu}>
                                {t("contactame")}
                            </Link>
                        </li>
                        <li className="nav-menu-list-item">
                            <Link to="/contactame" className="nav-links" onClick={closeMobileMenu}>
                                {t("contactame")}
                            </Link>
                        </li>
                        <li className="nav-menu-list-item">
                            <Link to="/inscripcion" className="nav-links" onClick={closeMobileMenu}>
                                {t("inscripcion")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;