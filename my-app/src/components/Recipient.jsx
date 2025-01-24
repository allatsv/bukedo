import React from "react";
import block1 from "./../assets/img/flower-item.png";
import block2 from "./../assets/img/photo1.jpg";
import block3 from "./../assets/img/rafaello.png";
import question from "./../assets/icon/question.svg";
import minus from "./../assets/icon/minus.svg";
import plus from "./../assets/icon/plus.svg";
import count from "./../assets/icon/count.svg";

function Recipient () {
    return (
        <section className="recipient">
            <div className="container">
                <div className="recipient__inner">
                    <div className="recipient__fields">
                        <div className="make-order__btns">
                            <button className="btn-gray btn-gray--active">Доставить получателю</button>
                            <button className="btn-gray">Получать буду я</button>
                        </div>
                        <div className="recipient__person">
                            <input placeholder="Имя получателя *" type="text" />
                            <input placeholder="Телефон получателя *" type="tell" />
                        </div>
                        <label className="recipient__add">
                            <input className="recipient__add-input" type="checkbox" />
                            <span className="recipient__add-fake"></span>
                            <div>
                                <p>Прислать мне фотоотчет получателя с букетом <span>+160 ₽</span></p>
                                <img src={question} alt="mark" />
                            </div>
                        </label>
                        <label className="recipient__add">
                            <input className="recipient__add-input" type="checkbox" />
                            <span className="recipient__add-fake"></span>
                            <p>Добавить открытку <span>+90 ₽</span></p>
                        </label>
                        <div className="recipient__cards">
                            <div className="recipient__cards-counter">
                                <p className="recipient__cards-text">Кол-во открыток</p>
                                <button>
                                    <img src={minus} alt="plus" />
                                </button>
                                <img className="recipient__cards-count" src={count} alt="count" />
                                <button>
                                    <img src={plus} alt="minus" />
                                </button>
                            </div>
                            <input placeholder="Текст открытки. Если открыток нужно несколько, то укажите явно какой текст к какому товару нужно приложить." type="text" />
                        </div>
                        <div className="recipient__email">
                            <p>Email для чека и фото букета</p>
                            <input placeholder="Введите Email" type="email" />
                        </div>
                        <div className="recipient__special">
                            <p>Особые пожелания</p>
                            <input placeholder="Комментарии" type="text" />
                        </div>
                        <a href="#" className="main-btn">Оформить заказ</a>
                        <label className="recipient__agree">
                            <input className="recipient__agree-input" type="checkbox" />
                            <span className="recipient__agree-fake"></span>
                            <span>Я соглашаюсь на хранение и обработку своих персональных данных в соответствии с законом №152-ФЗ "О персональных данных" от 27.07.2006, подтверждаю, что самостоятельно получил(-а) согласие третьих лиц на хранение и обработку их персональных данных и принимаю условия пользовательского соглашения</span>
                        </label>
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
                        <div className="make-order__info-promo">
                            <p>Есть промокод?</p>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.25L8.96967 11.514C9.26256 11.8287 9.73744 11.8287 10.0303 11.514L14 7.25" stroke="#93949B" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
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
export default Recipient