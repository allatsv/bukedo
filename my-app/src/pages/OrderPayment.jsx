import React from 'react'

import close from "./../assets/icon/close.svg";
import sbpcolor from "./../assets/icon/sbp-color.svg";
import card from "./../assets/icon/card.svg";
import yandex from "./../assets/icon/yandexpay.svg";
import tinkoff from "./../assets/icon/tinkoffpay.svg";
import sber from "./../assets/icon/sberpay.svg";
import umoney from "./../assets/icon/umoney.svg";
import wallet from "./../assets/icon/walleticon.svg";
import cardicon from "./../assets/icon/cardicon.svg";

function OrderPayment () {
    return (
        <div class="order-payment">
        <div class="container">
            <div class="order-payment__inner">
                <img src={close} alt="close" class="order-payment__close"/>
                <h4 class="order-payment__title">Оплата заказа</h4>
                <div class="order-payment__entity">
                    <button class="order-payment__entity-btn order-payment__entity-btn--active">Физ лицо</button>
                    <button class="order-payment__entity-btn">Юр. лицо или ИП</button>
                </div>
                <div class="order-payment__ways">
                    <h5 class="order-payment__pretitle">Способы оплаты</h5>
                    <div class="order-payment__ways-btns">
                        <button class="order-payment__ways-btn order-payment__ways-btn--active">
                            <img src={sbpcolor} alt="sbp"/>
                            <span>Система быстрых платежей</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={card} alt="card"/>
                            <span>Банковская карта</span>
                        </button>
                    </div>
                    <div class="order-payment__ways-othersbtn">
                        <button class="order-payment__ways-btn">
                            <img src={yandex} alt="yandex"/>
                            <span>Яндекс Pay</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={tinkoff} alt="tinkoff"/>
                            <span>Tinkoff Pay</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={sber} alt="sber"/>
                            <span>Sber Pay</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={umoney} alt="umoney"/>
                            <span>ЮMoney</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={wallet} alt="cash"/>
                            <span>Наличными в магазине</span>
                        </button>
                        <button class="order-payment__ways-btn">
                            <img src={cardicon} alt="cash"/>
                            <span>Наличными курьеру</span>
                        </button>
                    </div>
                    <p class="order-payment__ways-others">Другие способы оплаты</p>
                    <p class="order-payment__ways-others">Скрыть другие способы оплаты</p>
                </div>
                <div class="order-payment__bonus">
                    <div class="order-payment__bonus-top">
                        <h6 class="order-payment__pretitle">Списать 250 бонусных рублей</h6>
                        <div className="order-payment__bonus-check">
                        <input type="checkbox" />
                        </div>
                    </div>
                        <p class="order-payment__bonus-descrip">Бонусными рублями можно оплатить до 50% заказа</p>
                </div>
                <a href="#" class="main-btn">Оплатить 5 986 ₽ </a>
            </div>

            <div class="order-payment__inner">
                <img src={close} alt="close" class="order-payment__close"/>
                <h4 class="order-payment__title">Оплата заказа</h4>
                <div class="order-payment__entity">
                    <button class="order-payment__entity-btn">Физ лицо</button>
                    <button class="order-payment__entity-btn order-payment__entity-btn--active">Юр. лицо или ИП</button>
                </div>
                <div class="order-payment__create">
                    <h5 class="order-payment__pretitle">Создание счета</h5>
                    <p class="order-payment__create-descrip">Выберите заказы для которых создать счет</p>
                    <div class="order-payment__create-checks">
                        <div class="order-payment__create-check">
                            <input type="checkbox" id="check-op"/>
                            <label for="check-op">                    
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3346 4.6333L6.94411 11.0238C6.42341 11.5445 5.57919 11.5445 5.05849 11.0238L2.66797 8.6333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </label>
                            <span>№12133</span>
                        </div>
                        <div class="order-payment__create-check">
                            <input type="checkbox" id="check-op"/>
                            <label for="check-op"></label>
                        </div>
                    </div>
                    <h5 class="order-payment__pretitle">Компания</h5>
                    <input placeholder="Название юр. лица" type="text" class="order-payment__create-input"/>
                    <input placeholder="ИНН" type="text" class="order-payment__create-input"/>
                    <input placeholder="КПП (Для ИП оставьте пустым)" type="text" class="order-payment__create-input"/>
                    <input placeholder="Email (для отправки акта выполненых услуг)" type="email" class="order-payment__create-input"/>
                    <div class="order-payment__notification">
                        <div class="order-payment__create-check">
                            <input type="checkbox" id="check"/>
                            <label for="check">Уведомление мной прочитано, оплатить можно заранее, т.к. зачисление денежных средств происходит от 1 до 3 дней</label>
                        </div>
                    </div>
                </div>
                <div class="order-payment__bonus">
                    <div class="order-payment__bonus-top">
                        <h6 class="order-payment__bonus-title">Списать 250 бонусных рублей</h6>
                        <button class="order-payment__bonus-btn"></button>
                    </div>
                        <p class="order-payment__bonus-descrip">Бонусными рублями можно оплатить до 50% заказа</p>
                </div>
                <a href="#" class="main-btn">Оплатить 5 986 ₽ </a>
            </div>
        </div>
    </div>
    )
}

export default OrderPayment;