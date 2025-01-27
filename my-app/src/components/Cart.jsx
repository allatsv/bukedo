import React, { useState } from "react";

function CartItem() {
    return (
        <div className="cart__items">
            <div className="cart__items-wrap">
                <img src="../img/flower1.png" alt="" className="cart__img" />
                <div className="cart__content">
                    <h3 className="cart__name">Сиреневый плайм</h3>
                    <div className="cart__volume">Объём букета <span>1x</span></div>
                    <div className="counter">
                        <button className="btn-count btn-decr">-</button>
                        <span className="count">1</span>
                        <button className="btn-count btn-incr">+</button>
                    </div>
                    <svg className="cart__items-close" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="#F5F5F5" />
                        <path d="M18.7778 11L11 18.7778" stroke="#93949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 11L18.7778 18.7778" stroke="#93949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="cart__price">1 910 ₽</span>
                </div>




            </div>
        </div>
    )

}
const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__inner">
                <h3 className="cart__title">
                    Корзина
                </h3>

                <svg className="cart__close" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#F5F5F5" />
                    <path d="M17.5 17.5L25 25M25 25L32.5 32.5M25 25L32.5 17.5M25 25L17.5 32.5" stroke="#1C1C1D" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <CartItem />
                <CartItem />
                <CartItem />
                <div className="total">
                    <form action="">
                    <input className="promo" type="text" placeholder="Введите промокод" />
                    <button className="promo-btn">Ок</button>
                    </form>
                    
                    <div className="cart__total">
                        <div className="cart__total-inner">
                            <span  >Товары</span>
                            <span >5 786 ₽</span>
                        </div>
                        <div className="cart__total-inner">
                            <span >Доставка</span>
                            <span >0 ₽</span>
                        </div>
                        <div className="cart__total-inner">
                            <span >Бонусы</span>
                            <span className="cart__total-bonus">+157</span>
                        </div>
                        <div className="cart__total-inner-finish">

                            <span >Итого</span>
                            <span >5 786 ₽</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Cart;