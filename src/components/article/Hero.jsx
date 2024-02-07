import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from './gradientSVG';
import victoryNikkeIcon from '../icon/goddess-of-victory-nikke-icon-120x120.jpg.png';
import { ReactComponent as Burgericon } from '../icon/burger.svg';
import android from '../icon/android.svg';
import apple from '../icon/apple.svg';
import download from '../icon/download.svg';
import './hero.scss';

export default function Hero() {
  const [state, setstate] = useState(5.2);
  const [hero, setHero] = useState(false);

  const handleButtomModal = () => {
    setHero(!hero);
  };
  const handlChangeRate = evt => {
    setstate(evt);
  };

  const idCSS = 'hello';
  const percentage = state;
  return (
    <article>
      <div className="conteiner">
        <div
          className={hero ? 'conteiner__article is-open' : 'conteiner__article'}
        >
          <div className="hero">
            <section className="download">
              <img
                src={victoryNikkeIcon}
                alt="victory Nikke Icon"
                className="download__icon"
              />
              <div className="download__conteiner">
                <div className="download__title">
                  <h1 className="download__subtitle">
                    Lorem Ipsum is simply dummy
                  </h1>
                  <div className="download__blok">
                    <button className="download__button">
                      <img
                        src={android}
                        alt="Button Icon android"
                        className="search__icons"
                      />
                      Android
                    </button>
                    <button className="download__button">
                      <img
                        src={apple}
                        alt="Button Icon apple"
                        className="search__icons"
                      />
                      iOS
                    </button>
                    <button className="download__button ">
                      <img
                        src={download}
                        alt="Button Icon download"
                        className="search__icons"
                      />
                      Download on PC
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="progresBar">
              <div
                className="progresBar__circular"
                style={{ width: 86, height: 85 }}
              >
                <CircularProgressbar
                  strokeWidth={8}
                  value={percentage}
                  maxValue={10}
                  text={percentage}
                  styles={{
                    path: { stroke: `url(#${idCSS})`, height: '100%' },
                    trail: {
                      stroke: 'rgb(0,0,0,40%)',
                    },
                    text: {
                      // Text color
                      fill: '#fff',
                      // Text size
                      fontSize: '30px',
                      fontWeight: 900,
                    },
                    background: {
                      fill: '#000',
                    },
                  }}
                />
                <div className="gradientBG"></div>
                <GradientSVG />
              </div>

              <div className="progresBar__conteiner">
                <h2 className="progresBar__title">Players</h2>
                <p className="progresBar__text">12 votes</p>
                <p className="progresBar__text">
                  Your rating: <span>{state}</span>
                </p>
              </div>
            </section>
          </div>

          <div className="bottom__progres">
            <ul className="banner">
              <li className="banner__item">
                <a className="banner__link" href="">
                  Lorem Ipsum is simply dummy
                </a>
              </li>
              <li className="banner__item">
                <a className="banner__link" href="">
                  item
                </a>
              </li>
              <li className="banner__item">
                <a className="banner__link" href="">
                  item
                </a>
              </li>
              <li className="banner__item">
                <a className="banner__link" href="">
                  item
                </a>
              </li>
              <li className="banner__item">
                <a className="banner__link" href="">
                  item
                </a>
              </li>
            </ul>
            <div className="box">
              <div className="box__rating">
                <input
                  className="rate10"
                  type="radio"
                  name="rating"
                  value={10}
                  id="rate10"
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label className="rate10" htmlFor="rate10">
                  10
                </label>
                <input
                  type="radio"
                  name="rating"
                  value={9}
                  id="rate9"
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate9">9</label>
                <input
                  type="radio"
                  name="rating"
                  value={8}
                  id="rate8"
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate8">8</label>
                <input
                  type="radio"
                  name="rating"
                  value={7}
                  id="rate7"
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate7">7</label>
                <input
                  type="radio"
                  name="rating"
                  value={6}
                  id="rate6"
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate6">6</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate5"
                  value={5}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate5">5</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate4"
                  value={4}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate4">4</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate3"
                  value={3}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate3">3</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate2"
                  value={2}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate2">2</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate1"
                  value={1}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate1">1</label>
                <input
                  type="radio"
                  name="rating"
                  id="rate"
                  value={0}
                  onChange={evt => handlChangeRate(evt.currentTarget.value)}
                />
                <label htmlFor="rate">Note</label>
              </div>
            </div>
            <bottom
              type="button"
              className="modalBottomHero"
              onClick={handleButtomModal}
            >
              More info
              <Burgericon className="modalBottomHero__icon" />
            </bottom>
          </div>
          <div className={hero ? 'tabModal' : 'tabModal is-open'}>
            <ul className="tabModal__list">
              <li className="tabModal__item" id="test">
                <button className="tabModal__button" href="">
                  <span>Lorem Ipsum is simply dummy</span>
                </button>
              </li>
              <li className="tabModal__item">
                <button className="tabModal__button" href="">
                  <span>Item</span>
                </button>
              </li>
              <li className="tabModal__item">
                <button className="tabModal__button" href="">
                  <span>Item</span>
                </button>
              </li>
              <li className="tabModal__item">
                <button className="tabModal__button" href="">
                  <span>Item</span>
                </button>
              </li>

              <li className="tabModal__item">
                <button className="tabModal__button" href="">
                  <span>Item</span>
                </button>
              </li>
              <li className="tabModal__item">
                <button className="tabModal__button" href="">
                  <span>Item</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
