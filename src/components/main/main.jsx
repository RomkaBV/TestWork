import Image from '../icon/imagemain.png';
import { ReactComponent as User } from '../icon/user.svg';
import { ReactComponent as Clock } from '../icon/clock.svg';
import Image300 from '../icon/image22.svg';
import './main.scss';
export default function Main() {
  return (
    <main>
      <div className="conteiner">
        <div className="section">
          <div className="articles">
            <ul className="category">
              <li className="category__item">
                <a href="#" className="category__link">
                  Home
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Lorem Ipsum is
                </a>
              </li>
              <li className="category__item">
                <span>Lorem Ipsum is simply dummy</span>
              </li>
            </ul>
            <h1 className=" articles__title">Lorem Ipsum is simply dummy</h1>
            <p className="articles__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="articles__column">
              <h2 className="articles__subtitle">
                <span>Similar articles</span>
              </h2>
              <div className="articles__content">
                <div className="articles__blok blok">
                  <img className="blok__image" src={Image} alt="Icon robot" />
                  <h3 className="blok__title">Lorem Ipsum is simply dummy</h3>
                  <div className="blok__item">
                    <div className="blok__meta">
                      <User className="blok__icon" alt="user icon" />
                      <span className="blok__text">ALCO</span>
                    </div>
                    <div className="blok__meta">
                      <Clock className="blok__icon" alt="icon clock" />
                      <span className="blok__text">26 janvier 2023</span>
                    </div>
                  </div>
                </div>
                <div className="articles__blok blok">
                  <img className="blok__image" src={Image} alt="Icon robot" />
                  <h3 className="blok__title">Lorem Ipsum is simply dummy</h3>
                  <div className="blok__item">
                    <div className="blok__meta">
                      <User className="blok__icon" alt="user icon" />
                      <span className="blok__text">ALCO</span>
                    </div>
                    <div className="blok__meta">
                      <Clock className="blok__icon" alt="icon clock" />
                      <span className="blok__text">26 janvier 2023</span>
                    </div>
                  </div>
                </div>
                <div className="articles__blok blok">
                  <img className="blok__image" src={Image} alt="Icon robot" />
                  <h3 className="blok__title">Lorem Ipsum is simply dummy</h3>
                  <div className="blok__item">
                    <div className="blok__meta">
                      <User className="blok__icon" alt="user icon" />
                      <span className="blok__text">ALCO</span>
                    </div>
                    <div className="blok__meta">
                      <Clock className="blok__icon" alt="icon clock" />
                      <span className="blok__text">26 janvier 2023</span>
                    </div>
                  </div>
                </div>
                <div className="articles__blok blok">
                  <img className="blok__image" src={Image} alt="Icon robot" />
                  <h3 className="blok__title">Lorem Ipsum is simply dummy</h3>
                  <div className="blok__item">
                    <div className="blok__meta">
                      <User className="blok__icon" alt="user icon" />
                      <span className="blok__text">ALCO</span>
                    </div>
                    <div className="blok__meta">
                      <Clock className="blok__icon" alt="icon clock" />
                      <span className="blok__text">26 janvier 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content__blok">
            <h1 className="content__blok__title">ADS</h1>
            <h2 className="content__blok__subtitle">300x600</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
