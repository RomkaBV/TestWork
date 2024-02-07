import LogoImg from '../icon/logoImg.svg';
import LogoImgdark from '../icon/logoImgdark.svg';

import { ReactComponent as Facebook } from '../icon/ffacebook.svg';
import { ReactComponent as Twitter } from '../icon/ftwitter.svg';
import { ReactComponent as Instagram } from '../icon/finstagram.svg';
import { ReactComponent as Youtube } from '../icon/fyoutube.svg';
import { ReactComponent as Email } from '../icon/femail.svg';
import { ReactComponent as Wifi } from '../icon/fwifi.svg';
import './footer.scss';

export default function Footer({ state }) {
  return (
    <footer>
      <div className="conteiner">
        <div className="test">
          <div className="sociall">
            <img src={state ? LogoImg : LogoImgdark} className="sociall__img" />
            <h2 className="title">Lorem Ipsum is simply dummy</h2>
            <p className="text">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
            </p>
            <ul className="social">
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Facebook
                    alt="Link icon Facebook "
                    className="sociall__icons"
                  />
                </a>
              </li>
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Twitter alt="Link icon Twitter" className="sociall__icons" />
                </a>
              </li>
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Instagram
                    alt="Link icon Instagram"
                    className="sociall__icons"
                  />
                </a>
              </li>
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Youtube alt="Link icon YouTube" className="sociall__icons" />
                </a>
              </li>
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Email alt="Link icon Email" className="sociall__icons" />
                </a>
              </li>
              <li className="sociall__items">
                <a href="#" className="sociall__link">
                  <Wifi alt="Link icon Wifi" className="sociall__icons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sociall__blok">
            <div className="sociall__category">
              <div className="sociall__content">
                <h2 className="sociall__title">Categhory</h2>
                <ul className="sociall__list">
                  <li className="sociall__item">item 1</li>
                  <li className="sociall__item">item 2</li>
                  <li className="sociall__item">item 3</li>
                  <li className="sociall__item">item 4</li>
                  <li className="sociall__item">item 5</li>
                  <li className="sociall__item">item 6</li>
                </ul>
              </div>
              <div className="sociall__content">
                <h2 className="sociall__title">Play better</h2>
                <ul>
                  <li className="sociall__item">item 1</li>
                  <li className="sociall__item">item 2</li>
                  <li className="sociall__item">item 3</li>
                  <li className="sociall__item">item 4</li>
                  <li className="sociall__item">item 5</li>
                </ul>
              </div>
              <div className="sociall__content">
                <h2 className="sociall__title">Useful links</h2>
                <ul className="social__subtitle">
                  <li className="sociall__items">
                    <a className="social__links" href="#">
                      link
                    </a>
                  </li>
                  <li className="sociall__items">
                    <a className="social__links" href="#">
                      link
                    </a>
                  </li>
                  <li className="sociall__items">
                    <a className="social__links" href="#">
                      link
                    </a>
                  </li>
                  <li className="sociall__items">
                    <a className="social__links" href="#">
                      link
                    </a>
                  </li>
                  <li className="sociall__items">
                    <a className="social__links" href="#">
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="testa">Copyright © 2024. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
