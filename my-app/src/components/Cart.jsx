import React, {useState, useRef} from 'react'

function CartItem({img, name, value, price}) {
    return (
        <div className="cart__items">
            <div className="cart__items-wrap">
                <img src={img} alt="букет" className="cart__img" />
                <div className="cart__content">
                    <h3 className="cart__name">{name}</h3>
                    <div className="cart__volume">Объём букета <span>{value}x</span></div>
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
                    <span className="cart__price">{price} ₽</span>
                </div>




            </div>
        </div>
    )

}

function AdditionProduct(){
    return(
        <div className="addition__product">
                                <img src="../img/rafaello.png" alt="" />
                                <h3 className="addition__product-name">
                                    Raffaello коробка
                                </h3>
                                <div className="check-inner">
                                    <span className="addition__product-price">
                                        948 ₽
                                    </span>
                                    <div class="checkProduct">
                                        <input type="checkbox" id="check" />

                                    </div>
                                </div>

                            </div>
    )
}
const Cart = () => {
   
    return (
        <div className='cart'  >
            <div className="cart__inner">
                <h3 className="cart__title">
                    Корзина
                </h3>

                <svg className="cart__close" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" rx="25" fill="#F5F5F5" />
                    <path d="M17.5 17.5L25 25M25 25L32.5 32.5M25 25L32.5 17.5M25 25L17.5 32.5" stroke="#1C1C1D" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <CartItem name ="Сиреневый плайм" img="../img/flower1.png" value="2" price = "948" />
                <CartItem name ="Звонкий голос" img="../img/flower2.png" value="2" price = "948"/>
                <CartItem name ="Rafaello" img="../img/rafaello.png" value="" price = "948" />
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
                <div className="addition">
                    <div className="addition__inner">
                        <div className="addition__title">
                        Добавьте к букету
                        </div>
                        <div className="addition__category">
                            <ul className="addition__category-list">
                                <li className="addition__category-item">Все</li>
                                <li className="addition__category-item">Открытки</li>
                                <li className="addition__category-item">Сладости</li>
                                <li className="addition__category-item">Вазы</li>
                            </ul>
                            <div className="addition-btns">
                                <button>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.125 4.93164L3.09537 8.96037C3.03179 9.02285 3 9.10475 3 9.18664M7.125 13.1816L3.09537 9.41292C3.03179 9.35043 3 9.26854 3 9.18664M3 9.18664H15" stroke="#1C1C1D" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </button>
                                <button>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 4.93164L14.9046 8.96037C14.9682 9.02285 15 9.10475 15 9.18664M10.875 13.1816L14.9046 9.41292C14.9682 9.35043 15 9.26854 15 9.18664M15 9.18664H3" stroke="#1C1C1D" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="addition__products">
                            <AdditionProduct/>
                            <AdditionProduct/>
                            <AdditionProduct/>
                            <AdditionProduct/>
                            <AdditionProduct/>
                            <AdditionProduct/>
                            <AdditionProduct/>
                        </div>
                        <div className="addition__products">
                        <AdditionProduct/>
                        <AdditionProduct/>
                        <AdditionProduct/>
                        <AdditionProduct/>
                        <AdditionProduct/>
                        <AdditionProduct/>
                        </div>

                    </div>
                </div>
                <a className="cart__order" href="">Оформить заказ 5 786 ₽</a>
            </div>

        </div>
    )
}


export default Cart;