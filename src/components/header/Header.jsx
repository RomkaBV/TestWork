import LogoImg from "../icon/logoImg.svg";
import facebook from "../icon/facebook.svg";
import twitter from "../icon/twitter.svg";
import instagram from "../icon/instagram.svg";
import youtube from "../icon/youtube.svg";
import email from "../icon/email.svg";
import wifi from "../icon/wifi.svg";
import theme from "../icon/theme.svg";
import phone from "../icon/phone.svg";
import network from "../icon/network.svg";
import android from "../icon/android.svg";
import apple from "../icon/apple.svg";
import search from "../icon/search.svg";
import "./header.scss";
import { useState } from "react";

export default function Header() {
  const [state, setState] = useState(false);
  const handleTemeButtonClick = () => {
    setState((prevState) => !prevState);
  };
  return (
    <header>
      <div className="header">
        <div className="conteiner">
          <div className="header__title">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__link">
                  <img src={phone} alt="Icon-phone" className="header__icon" />
                </a>
                <span className="header__text">Menu item 1</span>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  <img
                    src={network}
                    alt="Icon-network"
                    className="header__icon"
                  />
                </a>
                <span className="header__text">Menu item 2</span>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  <img
                    src={android}
                    alt="Icon-android"
                    className="header__icon"
                  />
                </a>

                <span className="header__text">Menu item 3</span>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  <img src={apple} alt="Icon-apple" className="header__icon" />
                </a>
                <span className="header__text">Menu item 4</span>
              </li>
            </ul>

            <ul className="social">
              <li className="social__items">
                <a href="#" className="social__link">
                  <img src={facebook} alt="Facebook" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <img src={twitter} alt="Twitter" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="social__icon"
                  />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <img src={youtube} alt="YouTube" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <img src={email} alt="Email" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <img src={wifi} alt="Wifi" className="social__icon" />
                </a>
              </li>
              <button
                className={state ? "button__theme" : "button__theme is-open"}
                onClick={handleTemeButtonClick}
              >
                <img
                  src={theme}
                  alt="Button-Theme"
                  arial-label="Перемикач теми"
                  className="button__icon"
                />
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className="conteiner">
        <nav>
          <div className="header__nav nav">
            <div className="nav__logo">
              <a className="nav__link" href="./index.html">
                <img src={LogoImg} alt="Logo-Images" className="nav__icon" />
              </a>
            </div>

            <ul className="nav__site">
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
              <li className="nav__items">
                <a href="#" className="nav__link">
                  Item
                </a>
              </li>
            </ul>

            <form className="nav__search search">
              <label htmlFor="serch" className="search__label">
                <input
                  id="search"
                  type="text"
                  placeholder="Search for…"
                  aria-label="Пошук на сайті"
                  className="search__input"
                />
                <button className="search__button">
                  <img
                    src={search}
                    alt="Icon-search"
                    className="search__icons"
                  />
                </button>
              </label>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}
