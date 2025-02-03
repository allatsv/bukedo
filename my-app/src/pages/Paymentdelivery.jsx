import React, { useState, useRef } from 'react'
import qa from './../scripts/qa.js';
import paymentdelivery from "./../assets/img/paymentdelivery.png"
import plus from "./../assets/icon/plus.svg"
import minus from "./../assets/icon/minus.svg"

function Paymentdelivery({ data }) {
    const [selected, setSelected] = useState()
    let [isOpen, setOpen] = useState(false);
    return (

        <div>
            <section className="payment">
                <div className="container">
                    <div className="payment__inner">
                        <h3 className="main-title">Оплата</h3>
                        <div className="payment__how">
                            <img src={paymentdelivery} />
                            <div className="payment__how-info">
                                <h4 className="payment__how-title">Как платить на сайте</h4>
                                <ul className="payment__how-list">
                                    <li className="payment__how-item">1. Оплатить можно на сайте после оформления заказа.</li>
                                    <li className="payment__how-item">2. Для этого добавьте букет в корзину, в корзине нажмите «Оформить заказ»,</li>
                                    <li className="payment__how-item">3. Заполните адрес доставки и прочие поля, нажмите <br /> «Заказать».</li>
                                    <li className="payment__how-item">4. Вы попадете в личный кабинет с формой оплаты.</li>
                                    <li className="payment__how-item">5. Выбирайте любой способ оплаты из перечисленных ниже.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="payment__blocks">
                            <div className="payment__block">
                                <h5 className="payment__block-title">Картой всех банков</h5>
                                <p className="payment__block-info">Принимаем к оплате онлайн на сайте карты любого банка, включая карты Мир.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">СБП</h5>
                                <p className="payment__block-info">Можно оплатить через Систему быстрых платежей.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">TinkoffPay</h5>
                                <p className="payment__block-info">Принимаем оплату курьеру TinkoffPay.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">Cбербанк.Онлайн</h5>
                                <p className="payment__block-info">Можно оплатить картой Сбербанка через систему SberPay.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">ЮMoney</h5>
                                <p className="payment__block-info">Принимаем оплату с кошелька ЮMoney после оформления заказа.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">Оплата при получении</h5>
                                <p className="payment__block-info">Принимаем оплату курьеру наличными или картой</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">Оплатить в магазине</h5>
                                <p className="payment__block-info">Принимаем оплату в магазине.</p>
                            </div>
                            <div className="payment__block">
                                <h5 className="payment__block-title">Оплата по счёту</h5>
                                <p className="payment__block-info">Для компаний мы предоставляем скидки за объем, оплату по счету и полный документооборот. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="delivery">
                <div className="container">
                    <h3 className="main-title">Доставка</h3>
                    <p className="delivery__decrip">Доставка осуществляется ежедневно с 09:00 до 23:00 ч. в выбранный интервал.</p>
                </div>
                <div className="delivery__info">
                    <div className="delivery__img"></div>
                    <div className="delivery__questions">
                        <div>
                            {
                                data.map((item, index) => {
                                    return (
                                        <button className={`delivery__questions-item ${index === selected ? "delivery__questions-item--open" : ""}`} onClick={() => setSelected(index === selected ? false : index)}>
                                            <div>
                                                <span className='delivery__questions-question'>{item.question}</span>

                                                {
                                                    selected === index && (<span className='delivery__questions-answer'>
                                                        {item.answer}</span>)
                                                }
                                            </div>
                                            <div>
                                                {
                                                    selected === index ? (
                                                        <img className='delivery__questions-minus' src={minus} alt="minus" />
                                                    ) : (<img className='delivery__questions-plus' src={plus} alt="plus" />)
                                                }
                                            </div>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>




    )
}



export default Paymentdelivery;