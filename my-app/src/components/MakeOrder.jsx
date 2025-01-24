import block1 from "./../assets/img/flower-item.png";
import block2 from "./../assets/img/photo1.png";
import block3 from "./../assets/img/rafaello.png";

function MakeOrder () {
    return (
        <section className="make-order">
            <div className="container">
                <div className="make-order__inner">
                    <div className="make-order__fields">
                        <div className="make-order__btns">
                            <button className="btn-gray btn-gray--active">Адрес доставки</button>
                            <button className="btn-gray">Самовывоз</button>
                        </div>
                        <div className="make-order__checkbox">
                            <label>
                                <input className="make-order__checkbox-input" type="checkbox" />
                                <span className="make-order__checkbox-fake"></span>
                                <span>Знаю адрес</span>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span className="make-order__checkbox-fake"></span>
                                <span>Уточнить у получателя</span>
                            </label>
                        </div>
                        <div className="make-order__inputs">
                            <p className="make-order__inputs-title">Нужна доставка за город? Выберите населенный пункт</p>
                            <div className="make-order__inputs-city">
                                <input placeholder="г. Москва" type="text" />                              
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.25L8.96967 11.514C9.26256 11.8287 9.73744 11.8287 10.0303 11.514L14 7.25" stroke="#93949B" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <input placeholder="Укажите адрес доставки" type="text" className="make-order__inputs-address" />
                        </div>
                        <div className="make-order__date">
                            <div>
                                <p className="make-order__date-title">Дата и время доставки</p>
                                <input type="text" />
                            </div>
                            <label>
                                <input className="make-order__date-input" type="checkbox" />
                                <span className="make-order__date-fake"></span>
                                <span className="make-order__date-span">Знаю адрес</span>
                            </label>
                        </div>
                        <div className="make-order__tell">
                            <p className="make-order__tell-title">Ваш телефон</p>
                            <input placeholder="+7 (" type="tell" />
                        </div>
                        <button className="main-btn">Продолжить</button>

                        <div className="make-order__map">
                            <p className="make-order__map-address">г. Москва, Нижегородская, 25</p>
                            <div className="make-order__map-info">
                                <div>
                                    <p className="make-order__map-title">Время работы</p>
                                    <p className="make-order__map-descrip">Пн-Вс 8:00-22:00</p>
                                </div>
                                <div>
                                    <p className="make-order__map-title">Телефон</p>
                                    <p className="make-order__map-descrip">+7 901 634-66-28</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="make-order__date-title">Когда заберете заказ</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="make-order__info">
                        <p className="make-order__info-title">Ваш заказ</p>
                        <div className="make-order__block">
                            <div className="make-order__block-info">
                                <p className="make-order__block-product">Сиреневый плайм</p>
                                <p className="make-order__block-amount">1x</p>
                                <p className="make-order__block-pay">1 910 ₽</p>
                            </div>
                            <img src={block1} alt="photo" />
                        </div>
                        <div className="make-order__block">
                            <div className="make-order__block-info">
                                <p className="make-order__block-product">Звонкий голос</p>
                                <p className="make-order__block-amount">2x</p>
                                <p className="make-order__block-pay">3 450 ₽</p>
                            </div>
                            <img src={block2} alt="photo" />
                        </div>
                        <div className="make-order__block">
                            <div className="make-order__block-info">
                                <p className="make-order__block-product">Raffaello коробка</p>
                                <p className="make-order__block-pay">948 ₽</p>
                            </div>
                            <img src={block3} alt="photo" />
                        </div>
                        <div className="make-order__info-amount">
                            <p>Сумма</p>
                            <span>5 786 ₽</span>
                        </div>
                        <div className="make-order__info-delivery">
                            <p>Доставка</p>
                            <span>0 ₽</span>
                        </div>
                        <div className="make-order__info-bonus">
                            <p>Бонусы</p>
                            <span>+157</span>
                        </div>
                        <div className="make-order__info-total">
                            <p>Итого</p>
                            <p>5 786 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}