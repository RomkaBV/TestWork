import LogoImg from '../icon/logoImg.svg';
import LogoImgdark from '../icon/logoImgdark.svg';
import { ReactComponent as Facebook } from '../icon/facebook.svg';
import { ReactComponent as Twitter } from '../icon/twitter.svg';
import { ReactComponent as Instagram } from '../icon/instagram.svg';
import { ReactComponent as Youtube } from '../icon/youtube.svg';
import { ReactComponent as Email } from '../icon/email.svg';
import { ReactComponent as Wifi } from '../icon/wifi.svg';
import { ReactComponent as Burgericon } from '../icon/burger.svg';
import { ReactComponent as ModalClose } from '../icon/close.svg';
import theme from '../icon/theme.svg';
import themedark from '../icon/themedark.svg';
import { ReactComponent as Phone } from '../icon/phone.svg';
import { ReactComponent as Network } from '../icon/network.svg';
import { ReactComponent as Android } from '../icon/android.svg';
import { ReactComponent as Apple } from '../icon/apple.svg';

// import phone from '../icon/phone.svg';
// import network from '../icon/network.svg';
// import android from '../icon/android.svg';
// import apple from '../icon/apple.svg';
import search from '../icon/search.svg';
import './header.scss';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Header({ handleTemeButtonClick, state }) {
  const [header, setHeader] = useState(false);

  const handleButtomModal = () => {
    setHeader(!header);
  };
  const handleButtonSearch = evt => {
    evt.preventDefault();
    evt.target.reset();
  };
  return (
    <header>
      <div className="header">
        <div className="conteiner">
          <div className="header__title">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__link">
                  <Phone alt="Icon-phone" className="header__icon" />
                </a>
                <span className="header__text">Menu item 1</span>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  <Network alt="Icon-network" className="header__icon" />
                </a>
                <span className="header__text">Menu item 2</span>
              </li>
              <li className="header__item">
                <a href="#" className="header__link">
                  <Android alt="Icon android" className="header__icon" />
                </a>

                <span className="header__text">Menu item 3</span>
              </li>
              <li className="header__item" id="deletemMenu">
                <a href="#" className="header__link">
                  <Apple alt="Icon apple" className="header__icon" />
                </a>
                <span className="header__text">Menu item 4</span>
              </li>
            </ul>

            <ul className="social">
              <li className="social__items">
                <a href="#" className="social__link">
                  <Facebook alt="Facebook" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <Twitter alt="Twitter" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <Instagram alt="Instagram" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <Youtube alt="YouTube" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <Email alt="Email" className="social__icon" />
                </a>
              </li>
              <li className="social__items">
                <a href="#" className="social__link">
                  <Wifi alt="Wifi" className="social__icon" />
                </a>
              </li>
              <button
                className={state ? 'button__theme' : 'button__theme is-open'}
                onClick={handleTemeButtonClick}
              >
                <div
                  className={state ? 'button__blok' : 'button__blok is-open'}
                >
                  <img
                    src={state ? theme : themedark}
                    alt="Button-Theme"
                    arial-label="Перемикач теми"
                    className="button__icon"
                  />
                </div>
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
                <img
                  src={state ? LogoImg : LogoImgdark}
                  alt="Logo-Images"
                  className="nav__icon"
                />
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

            <form className="nav__search search" onSubmit={handleButtonSearch}>
              <label htmlFor="serch" className="search__label">
                <input
                  id="search"
                  type="text"
                  placeholder="Search for…"
                  aria-label="Пошук на сайті"
                  className="search__input"
                />

                <button className="search__button" type="submit">
                  <img
                    src={search}
                    alt="Button-Icon-search"
                    className="search__icons"
                  />
                </button>
              </label>
            </form>

            <bottom
              type="button"
              className="modalHeaderButton"
              onClick={handleButtomModal}
            >
              {header ? (
                <ModalClose className="modalHeaderButton__icon" />
              ) : (
                <Burgericon className="modalHeaderButton__icon" />
              )}
            </bottom>
          </div>
          <div className={header ? 'modal' : 'modal is-open'}>
            <form className="modal__form" onSubmit={handleButtonSearch}>
              <label htmlFor="serch" className="modal__label">
                <input
                  id="search"
                  type="text"
                  placeholder="Search for…"
                  aria-label="Пошук на сайті"
                  className="modal__input"
                />

                <button className="modal__button" type="submit">
                  <img
                    src={search}
                    alt="Button-Icon-search"
                    className="modal__icon"
                  />
                </button>
              </label>
            </form>
            <ul className="modal__site">
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
              <li className="modal__items">
                <a href="#" className="modal__link">
                  Item
                </a>
              </li>
            </ul>

            <ul className="modal__list">
              <li className="modal__item">
                <a href="#" className="modal__links">
                  <Phone alt="Icon-phone" className="modal__icons" />
                </a>
                <span className="modal__text">Menu item 1</span>
              </li>
              <li className="modal__item">
                <a href="#" className="modal__links">
                  <Network alt="Icon-network" className="modal__icons" />
                </a>
                <span className="modal__text">Menu item 2</span>
              </li>
              <li className="modal__item">
                <a href="#" className="modal__links">
                  <Android alt="Icon android" className="modal__icons" />
                </a>

                <span className="modal__text">Menu item 3</span>
              </li>
              <li className="modal__item">
                <a href="#" className="modal__links">
                  <Apple alt="Icon apple" className="modal__icons" />
                </a>
                <span className="modal__text">Menu item 4</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
