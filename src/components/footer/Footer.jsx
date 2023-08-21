import "./Footer.css";
import React from "react";
import Twitter from "../../assets/img/twitter.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import siteLogo from "../../assets/img/siteLogo.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <hr className="footer__line" />
      </div>
      <div className="footer__container container">
        <nav className="footernav">
          <Link to="/">
            <img
              src={siteLogo}
              alt="footer site logo"
              width="143"
              height="25"
            />
          </Link>

          <ul className="footernav__list">
            <li className="footenav__item">
              <NavLink to="/" className="footernav__link">
                Home
              </NavLink>
            </li>
            <li className="footenav__item">
              <NavLink to="/headphones" className="footernav__link">
                HEADPHONES
              </NavLink>
            </li>
            <li className="footenav__item">
              <NavLink to="/speakers" className="footernav__link">
                SPEAKERS
              </NavLink>
            </li>
            <li className="footenav__item">
              <NavLink to="/earphones" className="footernav__link">
                EARPHONES
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__info">
          <div>
            <p className="footer__text">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="footer__copy">
            Copyright 2021. All Rights Reserved
            </p>
          </div>
          <ul className="footer__socials">
            <li>
              <NavLink
                target={"_blank"}
                to="https://ru-ru.facebook.com/"
                className="social__link"
              >
                <img
                  src={Facebook}
                  alt="facebook logo"
                  width="24"
                  height="24"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                target={"_blank"}
                to="https://twitter.com/?lang=ru"
                className="social__link"
              >
                <img
                  src={Twitter}
                  alt="twitter logo"
                  width="24"
                  height="19.504"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                target={"_blank"}
                to="https://instagram.com"
                className="social__link"
              >
                <img
                  src={Instagram}
                  alt="instagram logo"
                  width="24"
                  height="24"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
