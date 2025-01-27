import React, {useState, useRef} from 'react'
import {useClickOutside} from './../scripts/useClickOutside.js'
import cart from "./../assets/icon/cart.svg"
import userHeader from "./../assets/icon/user.svg"
import like from "./../assets/icon/like.svg"
import flower1 from "./../assets/img/flowers-header1.png"
import flower2 from "./../assets/img/flowers-header2.png"
import flower3 from "./../assets/img/flowers-header3.png"
import flower4 from "./../assets/img/flowers-header4.png"
import flower5 from "./../assets/img/flowers-header5.png"
import flower6 from "./../assets/img/flowers-header6.png"
import flower7 from "./../assets/img/flowers-header7.png"
import flower8 from "./../assets/img/flowers-header8.png"
import flower9 from "./../assets/img/flowers-header9.png"
import flower10 from "./../assets/img/flowers-header10.png"
import flower11 from "./../assets/img/flowers-header11.png"
import flower12 from "./../assets/img/flowers-header12.png"
import flower13 from "./../assets/img/flowers-header13.png"
import flower14 from "./../assets/img/flowers-header14.png"
import flower15 from "./../assets/img/flowers-header15.png"
import logo from "./../assets/icon/logo.svg"
import down from "./../assets/icon/down.svg"
import local from "./../assets/icon/local.svg"
import clock from "./../assets/icon/clock.svg"
import list from "./../assets/icon/list.svg"
import search from "./../assets/icon/search.svg"
import whatsapp from "./../assets/icon/whatsapp.svg"
import telegram from "./../assets/icon/telegram.svg"
import close from "./../assets/icon/close.svg";
import right from "./../assets/icon/right.svg"
import Cart from './Cart.jsx'




const Header = () => {
const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) {setTimeout(() => setOpen(false), 50);} ;
    
  });
  const [isOpenCart, setOpenCart] = useState(false);

  const cartRef = useRef(null);
  useClickOutside(cartRef, () => {
    if (isOpen) {setTimeout(() => setOpenCart(false), 50);} ;
    
  });

    return (
        <header className="header">
            <div className="header__hrs">
                <hr />
                <hr />
            </div>
            <div className="header__imgs">
                <img src={flower1} alt="#" />
                <img src={flower2} alt="#" />
                <img src={flower3} alt="#" />
                <img src={flower4} alt="#" />
                <img src={flower5} alt="#" />
                <img src={flower6} alt="#" />
                <img src={flower7} alt="#" />
                <img src={flower8} alt="#" />
                <img src={flower9} alt="#" />
                <img src={flower10} alt="#" />
                <img src={flower11} alt="#" />
                <img src={flower12} alt="#" />
                <img src={flower13} alt="#" />
                <img src={flower14} alt="#" />
                <img src={flower15} alt="#" />
            </div>
            <div className="container">
                <div className="header__inner">
                    <div className="header__top">
                        <div className="header__left">
                            <div className="header__local">
                                <img src={local} alt="local" />
                                <span>Санкт-Петербург</span>
                            </div>
                            <div className="header__hours">
                                <img src={clock} alt="clock" />
                                <span>23 июля с 11:00 до 21:00</span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.25L8.96967 11.514C9.26256 11.8287 9.73744 11.8287 10.0303 11.514L14 7.25" stroke="#AD2950" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__list">
                                <li className="header__item"><a href="#">Адреса магазинов</a></li>
                                <li className="header__item"><a href="#">Отзывы</a></li>
                                <li className="header__item">
                                    <a href="#">
                                        <span>Информация</span>
                                        <img src={down} alt="down" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__bottom">
                        <div  className={`catalog-list  ${isOpen ? "active" : ""} `}  ref={menuRef}>
                            <div className="container">
                                <div className='catalog-list__inner'>
                                    <div className="catalog-list__column">
                                        <ul className='catalog-list__category'>
                                            <a href=""><li className='catalog-list__category-item'>Букеты</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Цветы в коробке</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Корзины с цветами</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Букеты с фруктами</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Шляпные коробки</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Новогодние композиции</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Подарочные корзины</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Фруктовые корзины</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Топперы</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Съедобные букеты</li></a>
                                            <a href=""><li className='catalog-list__category-item'>Все подарки</li></a>
                                        </ul>

                                        <ul className='catalog-list__filter'>
                                            <li className='catalog-list__filter-item'>По цене</li>
                                            <li className='catalog-list__filter-item'>По цветам</li>
                                            <li className='catalog-list__filter-item'>Повод</li>
                                            <li className='catalog-list__filter-item'>По размеру</li>
                                            <li className='catalog-list__filter-item'>По гамме</li>

                                        </ul>

                                        <div className="choice">
                                            <div className="choice__inner">
                                                <a href='' className="choice__flex-item">
                                                    Альстромерия
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Амариллис
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Анемон
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гвоздика
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гвоздика кустовая
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гербера
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гербера мини
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гиацинт
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гипсофила
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Гортензия
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Ирис
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Калла
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Лаванда
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Лилия
                                                </a>
                                            </div>
                                            <div className="choice__inner">
                                                <a href='' className="choice__flex-item">
                                                    Мимоза
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Нарцисс
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Орхидея Ванда
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Орхидея Фаленопсис
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Орхидея Цимбидиум
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Пион
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Пион Сара Бернар
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Подсолнух
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Ранункулюс
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза Вувузела
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза Пинк Охара
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза Эквадор
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза кустовая
                                                </a>
                                            </div>
                                            <div className="choice__inner">
                                                <a href='' className="choice__flex-item">
                                                    Роза кустовая пионовидная
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Роза пионовидная
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Ромашка
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Сирень
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Тюльпан
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Тюльпан пионовидный
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Хлопок
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Хризантема Антонов
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Хризантема Момоко
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Хризантема кустовая
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Хризантема одноголовая
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Эустома
                                                </a>
                                                <a href='' className="choice__flex-item">
                                                    Эустома махровая
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div  className="city-delivery">
                            <div className="container">
                                <div className="city-delivery__inner">
                                    <h4 className="city-delivery__title">
                                        <span>Выберите город доставки</span>
                                        <img src={close} alt="close" />
                                    </h4>
                                    <div className="city-delivery__field">
                                        <img src={search} alt="search"/>
                                        <input placeholder='Введите название населенного пункта' type="text" className="city-delivery__field-input" />
                                    </div>
                                    <div className="city-delivery__columns">
                                    <div className="city-delivery__column">
                                        <ul className="city-delivery__category">
                                            <li className="city-delivery__category-item">Анапа</li>
                                            <li className="city-delivery__category-item">Брянск</li>
                                            <li className="city-delivery__category-item">Владимир</li>
                                            <li className="city-delivery__category-item">Волгоград</li>
                                            <li className="city-delivery__category-item">Воронеж</li>
                                            <li className="city-delivery__category-item">Геленджик</li>
                                            <li className="city-delivery__category-item">Дзержинск</li>
                                            <li className="city-delivery__category-item">Ейск</li>
                                            <li className="city-delivery__category-item">Екатеринбург</li>
                                            <li className="city-delivery__category-item">Елабуга</li>
                                        </ul>
                                    </div>
                                    <div className="city-delivery__column">
                                        <ul className="city-delivery__category">
                                            <li className="city-delivery__category-item">Иркутск</li>
                                            <li className="city-delivery__category-item">Калининград</li>
                                            <li className="city-delivery__category-item">Каменск-Уральский</li>
                                            <li className="city-delivery__category-item">Краснодар</li>
                                            <li className="city-delivery__category-item">Кстово</li>
                                            <li className="city-delivery__category-item">Курган</li>
                                            <li className="city-delivery__category-item">Курск</li>
                                            <li className="city-delivery__category-item">Москва</li>
                                            <li className="city-delivery__category-item">Нижнекамск</li>
                                            <li className="city-delivery__category-item">Нижний Новгород</li>
                                        </ul>
                                    </div>
                                    <div className="city-delivery__column">
                                        <ul className="city-delivery__category">
                                            <li className="city-delivery__category-item">Октябрьский</li>
                                            <li className="city-delivery__category-item">Омск</li>
                                            <li className="city-delivery__category-item">Оренбург</li>
                                            <li className="city-delivery__category-item">Орск</li>
                                            <li className="city-delivery__category-item">Пенза</li>
                                            <li className="city-delivery__category-item">Пермь</li>
                                            <li className="city-delivery__category-item">Петрозаводск</li>
                                            <li className="city-delivery__category-item">Пятигорск</li>
                                            <li className="city-delivery__category-item">Самара</li>
                                            <li className="city-delivery__category-item">Санкт-Петербург</li>
                                        </ul>
                                    </div>
                                    <div className="city-delivery__column">
                                        <ul className="city-delivery__category">
                                            <li className="city-delivery__category-item">Саратов</li>
                                            <li className="city-delivery__category-item">Севастополь</li>
                                            <li className="city-delivery__category-item">Сочи</li>
                                            <li className="city-delivery__category-item">Таганрог</li>
                                            <li className="city-delivery__category-item">Тула</li>
                                            <li className="city-delivery__category-item">Тюмень</li>
                                            <li className="city-delivery__category-item">Челябинск</li>
                                            <li className="city-delivery__category-item">Шахты</li>
                                            <li className="city-delivery__category-item">Якутск</li>
                                            <li className="city-delivery__category-item">Ярославль</li>
                                        </ul>
                                    </div>
                                    </div>
                                    <button className="white-btn">
                                        <span>Больше городов</span>
                                        <img src={right} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <a href="#"><img src={logo} alt="logo" className="logo" /></a>
                        <button onClick={() => {setOpen(!isOpen);} } className="main-btn">
                            <img src={list} alt="list" />
                            <span>Каталог</span>
                        </button>
                        <div className="header__field">
                            <img src={search} alt="search" />
                            <input placeholder="Найти товары" type="text" className="header__input" />
                        </div>
                        <a href="#">
                            <div className="connect-info">
                                <p className="connect-descrip">На связи с 8:00 до 20:00</p>
                                <div className="connect-bottom">
                                    <p className="connect-title">8 495 215-20-97</p>
                                    <img src={whatsapp} alt="whatsapp" className="header__whatsapp" />
                                    <img src={telegram} alt="telegram" className="header__telegram" />
                                    <img src={down} alt="down" className="header__arrow" />
                                </div>
                            </div>
                        </a>
                        <button className="header__like">
                            <img src={like} alt="like" />
                        </button>
                        <button onClick={() => {setOpenCart(!isOpenCart);} } className="header__cart" >
                            <img src={cart} alt="cart" />
                        </button>
                        <Cart />
                        <button className="header__account">
                            <img src={userHeader} alt="account" />
                            <div className="header__account-hrs">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
