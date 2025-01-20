import React from 'react'
import qa from './../scripts/qa.js';
import paymentdelivery from "./../assets/img/paymentdelivery.png"
import plus from "./../assets/icon/plus.svg"
import minus from "./../assets/icon/minus.svg"
function Paymentdelivery() {
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
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Стоимость доставки</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Дата и время доставки</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Доставка по области</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Не знаю адрес получателя</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">SMS-уведомление о доставке</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Доставка в режимные объекты (офисы, больницы, 
                                заводы и пр.)</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                    <button className="delivery__questions-item delivery__questions-item--display">
                        <div>
                            <span className="delivery__questions-question">Фото получателя</span>
                            <span className="delivery__questions-answer delivery__questions-answer--display">Ближайшее время доставки через 2-3 часа после оплаты заказа. Также при оформлении заказа вы можете выбрать другой день и время доставки. Обратите внимание, что в праздничные дни срок доставки на текущее время увеличивается до 4-6 часов.</span>
                        </div>
                        <img src={plus} alt="plus" className="delivery__questions-plus"/>
                        <img src={minus} alt="minus" className="delivery__questions-minus delivery__questions-minus--display" style={{display: "none"}}/>
                    </button>
                </div>
            </div>
            </section>
    
        </div>
        



    )
}



export default Paymentdelivery;