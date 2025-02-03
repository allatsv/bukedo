import React from "react";
import block1 from "./../assets/img/flower-item.png";
import block2 from "./../assets/img/photo1.jpg";
import block3 from "./../assets/img/rafaello.png";
import map from "./../assets/img/map.png";
import mapAdapt from "./../assets/img/map-adapt.png";

function MakeOrder() {
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
                                <input className="make-order__checkbox-input" name="adress" id="adress1" type="radio" />
                                <span className="make-order__checkbox-fake"></span>
                                <span>Знаю адрес</span>
                            </label>
                            <label>
                                <input type="radio" className="make-order__checkbox-input" name="adress" id="adress0" />
                                <span className="make-order__checkbox-fake"></span>
                                <span>Уточнить у получателя</span>
                            </label>
                        </div>
                        <div className="make-order__inputs">
                            <p className="make-order__inputs-title">Нужна доставка за город? Выберите населенный пункт</p>
                            <div className="make-order__inputs-city">
                                <div className="input-inner input-inner-city-item">
                                    <input placeholder="г. Москва" type="text" />
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7.25L8.96967 11.514C9.26256 11.8287 9.73744 11.8287 10.0303 11.514L14 7.25" stroke="#93949B" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div className="input-inner">
                                    <input placeholder="Укажите адрес доставки" type="text" className="make-order__inputs-address" />
                                </div>

                            </div>

                        </div>
                        <div className="make-order__date">
                        <p className="make-order__date-title">Дата и время доставки</p>
                            <div className="make-order__date-inner">
                                <div className="input-inner">
                                   {/* <input placeholder="05.09.2024, 10:00-12:00" type="text" />*/}
                                   <svg className="calendar-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4177 3.75C10.4177 3.33579 10.0819 3 9.6677 3C9.25349 3 8.9177 3.33579 8.9177 3.75H10.4177ZM8.9177 7.26979C8.9177 7.684 9.25349 8.01979 9.6677 8.01979C10.0819 8.01979 10.4177 7.684 10.4177 7.26979H8.9177ZM18.2531 7.26979C18.2531 7.684 18.5889 8.01979 19.0031 8.01979C19.4173 8.01979 19.7531 7.684 19.7531 7.26979H18.2531ZM19.7531 3.75003C19.7531 3.33582 19.4173 3.00003 19.0031 3.00003C18.5889 3.00003 18.2531 3.33582 18.2531 3.75003H19.7531ZM5.00001 20.2492L5.75001 20.2492V20.2492H5.00001ZM5.00001 8.57998L5.75001 8.57998V8.57998H5.00001ZM8.9177 3.75V7.26979H10.4177V3.75H8.9177ZM19.0031 5.8292H20.17V4.3292H19.0031V5.8292ZM18.2531 5.0792V7.26979H19.7531V5.0792H18.2531ZM19.7531 5.0792V3.75003H18.2531V5.0792H19.7531ZM4.25001 20.2492C4.25 22.5969 6.15314 24.5 8.50078 24.5V23C6.98157 23 5.75 21.7684 5.75001 20.2492L4.25001 20.2492ZM22.9208 20.2492C22.9208 21.7684 21.6892 23 20.17 23V24.5C22.5177 24.5 24.4208 22.5969 24.4208 20.2492H22.9208ZM24.4208 8.57998C24.4208 6.23234 22.5177 4.3292 20.17 4.3292V5.8292C21.6892 5.8292 22.9208 7.06077 22.9208 8.57998H24.4208ZM5.75001 8.57998C5.75001 7.06077 6.98158 5.8292 8.50079 5.8292V4.3292C6.15315 4.3292 4.25001 6.23234 4.25001 8.57998H5.75001ZM5 11.7914H23.6708V10.2914H5V11.7914ZM22.9208 8.57998V20.2492H24.4208V8.57998H22.9208ZM5.75001 20.2492L5.75001 8.57998L4.25001 8.57998L4.25001 20.2492H5.75001ZM8.50079 5.8292H19.0031V4.3292H8.50079V5.8292ZM20.17 23H8.50078V24.5H20.17V23Z" fill="#AD2950" />
                                   </svg>                                  
                                    <div class="pa__middle-item input-txt"><input class="pa__middle-input text" type="date" name="date" placeholder="From" onchange="this.className=(this.value!=''?'has-value':'')" required/></div>                           
                                </div>
                                <div class="make-order__date-check">
                                <input class="make-order__date-time" type="checkbox" id="check"/>
                                <label for="check">Уточните время у получателя</label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="make-order__tell">
                            <p className="make-order__tell-title">Ваш телефон</p>
                            <input placeholder="+7 (" type="tell" />
                        </div>
                        <button className="main-btn">Продолжить</button>

                        <h3 className="make-order__title">Адрес доставки</h3>

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
                            <img src={map} alt="map" className="make-order__map-map" />
                            <img src={mapAdapt} alt="map" className="make-order__map-adapt" />


                        </div>
                        <div className="make-order__date">
                        <p className="make-order__date-title">Когда заберете заказ</p>
                            <div className="make-order__date-inner">
                                <div className="input-inner">
                                   {/* <input placeholder="05.09.2024, 10:00-12:00" type="text" />*/}
                                   <svg className="calendar-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4177 3.75C10.4177 3.33579 10.0819 3 9.6677 3C9.25349 3 8.9177 3.33579 8.9177 3.75H10.4177ZM8.9177 7.26979C8.9177 7.684 9.25349 8.01979 9.6677 8.01979C10.0819 8.01979 10.4177 7.684 10.4177 7.26979H8.9177ZM18.2531 7.26979C18.2531 7.684 18.5889 8.01979 19.0031 8.01979C19.4173 8.01979 19.7531 7.684 19.7531 7.26979H18.2531ZM19.7531 3.75003C19.7531 3.33582 19.4173 3.00003 19.0031 3.00003C18.5889 3.00003 18.2531 3.33582 18.2531 3.75003H19.7531ZM5.00001 20.2492L5.75001 20.2492V20.2492H5.00001ZM5.00001 8.57998L5.75001 8.57998V8.57998H5.00001ZM8.9177 3.75V7.26979H10.4177V3.75H8.9177ZM19.0031 5.8292H20.17V4.3292H19.0031V5.8292ZM18.2531 5.0792V7.26979H19.7531V5.0792H18.2531ZM19.7531 5.0792V3.75003H18.2531V5.0792H19.7531ZM4.25001 20.2492C4.25 22.5969 6.15314 24.5 8.50078 24.5V23C6.98157 23 5.75 21.7684 5.75001 20.2492L4.25001 20.2492ZM22.9208 20.2492C22.9208 21.7684 21.6892 23 20.17 23V24.5C22.5177 24.5 24.4208 22.5969 24.4208 20.2492H22.9208ZM24.4208 8.57998C24.4208 6.23234 22.5177 4.3292 20.17 4.3292V5.8292C21.6892 5.8292 22.9208 7.06077 22.9208 8.57998H24.4208ZM5.75001 8.57998C5.75001 7.06077 6.98158 5.8292 8.50079 5.8292V4.3292C6.15315 4.3292 4.25001 6.23234 4.25001 8.57998H5.75001ZM5 11.7914H23.6708V10.2914H5V11.7914ZM22.9208 8.57998V20.2492H24.4208V8.57998H22.9208ZM5.75001 20.2492L5.75001 8.57998L4.25001 8.57998L4.25001 20.2492H5.75001ZM8.50079 5.8292H19.0031V4.3292H8.50079V5.8292ZM20.17 23H8.50078V24.5H20.17V23Z" fill="#AD2950" />
                                   </svg>                                  
                                    <div class="pa__middle-item input-txt"><input class="pa__middle-input text" type="date" name="date" placeholder="From" onchange="this.className=(this.value!=''?'has-value':'')" required/></div>                           
                                </div>
                            </div>
                            
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

export default MakeOrder;