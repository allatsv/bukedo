import React from 'react'

function Main () {
    return (
       <div>
         <section class="info">
        <div class="container">
            <div class="info__inner">
                <img src="img/info.png" alt="photo"/>
                <div class="info__address">
                    <h3 class="main-title">Московские букеты</h3>
                    <div class="info__address-address">
                        <span>г. Москва, 2-я Звенигородская улица, 13с42</span>
                        <a href="" class="info__address-map">На карте</a>
                    </div>
                    <div class="info__address-blocks">
                        <div class="info__address-block">
                            <img src="icon/star.svg" alt="star"/>
                            <div class="info__address-point">•</div>
                            <p class="info__address-span">3 оценки</p>
                            <div class="info__address-point">•</div>
                            <p class="info__address-text">25 покупок</p>
                        </div>
                        <div class="info__address-block">
                            <img src="icon/car.svg" alt="car"/>
                            <p class="info__address-text">Доставка 60-80 мин</p>
                            <div class="info__address-point">•</div>
                            <p class="info__address-text">250 ₽</p>
                        </div>
                    </div>
                </div>
                <div class="info__hours">
                    <div class="info__hours-flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.27783V10.0001L13.6111 12.5001" stroke="#1C1C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 1.94482C14.4489 1.94482 18.0556 5.55149 18.0556 10.0004C18.0556 14.4493 14.4489 18.0559 10 18.0559" stroke="#1C1C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.30404 16.5299C4.76427 16.5299 5.13737 16.1569 5.13737 15.6966C5.13737 15.2364 4.76427 14.8633 4.30404 14.8633C3.8438 14.8633 3.4707 15.2364 3.4707 15.6966C3.4707 16.1569 3.8438 16.5299 4.30404 16.5299Z" fill="#1C1C1D"/>
                        <path d="M1.94466 10.8337C2.4049 10.8337 2.77799 10.4606 2.77799 10.0003C2.77799 9.54009 2.4049 9.16699 1.94466 9.16699C1.48442 9.16699 1.11133 9.54009 1.11133 10.0003C1.11133 10.4606 1.48442 10.8337 1.94466 10.8337Z" fill="#1C1C1D"/>
                        <path d="M4.30404 5.13688C4.76427 5.13688 5.13737 4.76379 5.13737 4.30355C5.13737 3.84331 4.76427 3.47021 4.30404 3.47021C3.8438 3.47021 3.4707 3.84331 3.4707 4.30355C3.4707 4.76379 3.8438 5.13688 4.30404 5.13688Z" fill="#1C1C1D"/>
                        <path d="M6.91732 18.2756C7.37755 18.2756 7.75065 17.9025 7.75065 17.4422C7.75065 16.982 7.37755 16.6089 6.91732 16.6089C6.45708 16.6089 6.08398 16.982 6.08398 17.4422C6.08398 17.9025 6.45708 18.2756 6.91732 18.2756Z" fill="#1C1C1D"/>
                        <path d="M2.55794 13.9157C3.01818 13.9157 3.39128 13.5426 3.39128 13.0824C3.39128 12.6221 3.01818 12.249 2.55794 12.249C2.09771 12.249 1.72461 12.6221 1.72461 13.0824C1.72461 13.5426 2.09771 13.9157 2.55794 13.9157Z" fill="#1C1C1D"/>
                        <path d="M2.55794 7.75114C3.01818 7.75114 3.39128 7.37804 3.39128 6.91781C3.39128 6.45757 3.01818 6.08447 2.55794 6.08447C2.09771 6.08447 1.72461 6.45757 1.72461 6.91781C1.72461 7.37804 2.09771 7.75114 2.55794 7.75114Z" fill="#1C1C1D"/>
                        <path d="M6.91732 3.39128C7.37755 3.39128 7.75065 3.01818 7.75065 2.55794C7.75065 2.09771 7.37755 1.72461 6.91732 1.72461C6.45708 1.72461 6.08398 2.09771 6.08398 2.55794C6.08398 3.01818 6.45708 3.39128 6.91732 3.39128Z" fill="#1C1C1D"/>
                        </svg>
                        <div class="info__hours-info">
                            <p class="info__hours-title">Режим работы</p>
                            <p class="info__hours-text">Пн-Вс 8:00-22:00</p>
                        </div>
                    </div>
                    <div class="info__hours-flex">                    
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_18147_8709)">
                        <path d="M8.19944 13.6717L9.15144 12.5668C9.40694 12.2483 9.84445 12.141 10.2178 12.3067L12.2991 13.156C12.7016 13.3345 12.9151 13.7778 12.8043 14.2037L12.2093 16.0155C12.0471 16.5113 11.5734 16.859 11.0543 16.817C8.42461 16.6047 6.06211 15.4497 4.30394 13.6903L4.30978 13.6962C2.55044 11.938 1.39544 9.57551 1.18311 6.94584C1.14111 6.42551 1.48994 5.95301 1.98461 5.79084L3.79644 5.19584C4.22228 5.08501 4.66561 5.29967 4.84411 5.70101L5.69344 7.78234C5.85911 8.15567 5.75294 8.59434 5.43328 8.84867L4.32844 9.80067" stroke="#1C1C1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_18147_8709">
                        <rect width="14" height="14" fill="white" transform="translate(0 4)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <div class="info__hours-info">
                            <p class="info__hours-title">Телефон</p>
                            <p class="info__hours-text">+7 901 634-66-28</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="categories">
        <div class="container">
            <div class="categories__inner">
                <div class="categories__gradient"></div>
                <img src="icon/right.svg" alt="arrow" class="right"/>
                <div class="categories__block categories__block--active">
                    <img src="img/categories-hits.png" alt="photo"/>
                    <h3 class="categories__block-title categories__block-title--active">Хиты</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-flowers.png" alt="photo"/>
                    <h3 class="categories__block-title">Цветы</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-ballons.png" alt="photo"/>
                    <h3 class="categories__block-title">Шары</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-bunches.png" alt="photo"/>
                    <h3 class="categories__block-title">Съедобные букеты</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-dessert.png" alt="photo"/>
                    <h3 class="categories__block-title">Десерты
                        и Выпечка</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-chocolate.png" alt="photo"/>
                    <h3 class="categories__block-title">Конфеты и шоколад</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-cards.png" alt="photo"/>
                    <h3 class="categories__block-title">Открытки</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-gifts.png" alt="photo"/>
                    <h3 class="categories__block-title">Подарки</h3>
                </div>
                <div class="categories__block">
                    <img src="img/categories-plants.png" alt="photo"/>
                    <h3 class="categories__block-title">Горшечные растения</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="products">
        <div class="container">
            <div class="products__inner">
                <div class="products__product">
                    <div class="products__product-photo"></div>
                    <h3 class="products__product-title">Нежные орхидеи</h3>
                    <div class="products__product-delivery">
                        <img src="icon/delivery.svg" alt="delivery"/>
                        <span>350 ₽, через 2 часа</span>
                    </div>
                    <div class="products__product-buy">
                        <span>10 250 ₽</span>
                        <button class="btn-pink">Купить</button>
                    </div>
                </div>
                <div class="products__product">
                    <div class="products__product-photo"></div>
                    <h3 class="products__product-title">Нежные орхидеи</h3>
                    <div class="products__product-delivery">
                        <img src="icon/delivery.svg" alt="delivery"/>
                        <span>350 ₽, через 2 часа</span>
                    </div>
                    <div class="products__product-buy">
                        <span>10 250 ₽</span>
                        <button class="btn-pink">Купить</button>
                    </div>
                </div>
                <div class="products__product">
                    <div class="products__product-photo"></div>
                    <h3 class="products__product-title">Сиреневый плайм</h3>
                    <div class="products__product-delivery">
                        <img src="icon/delivery.svg" alt="delivery"/>
                        <span>350 ₽, через 2 часа</span>
                    </div>
                    <div class="products__product-buy">
                        <span>1 910 ₽</span>
                        <button class="btn-pink">Купить</button>
                    </div>
                </div>
                <div class="products__product">
                    <div class="products__product-photo"></div>
                    <h3 class="products__product-title">Поцелуй солнца</h3>
                    <div class="products__product-delivery">
                        <img src="icon/delivery.svg" alt="delivery"/>
                        <span>350 ₽, через 2 часа</span>
                    </div>
                    <div class="products__product-buy">
                        <span>2 050 ₽</span>
                        <button class="btn-pink">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="reviews">
        <div class="container">
            <div class="reviews__inner">
                <h3 class="main-title">Отзывы</h3>
                <div class="reviews__rating">
                    <p class="reviews__rating-number">4.6</p>
                    <div class="reviews__rating-block">
                        <div class="reviews__rating-stars">
                            <img src="icon/star.svg" alt="star"/>
                            <img src="icon/star.svg" alt="star"/>
                            <img src="icon/star.svg" alt="star"/>
                            <img src="icon/star.svg" alt="star"/>
                            <img src="icon/star.svg" alt="star"/>
                        </div>
                        <div class="reviews__rating-info">
                        <span>4 оценки</span>
                        <div class="reviews__rating-point">•</div>
                        <span>35 покупок</span>
                        </div>
                    </div>
                </div>
                <div class="reviews__preview">
                    <div class="reviews__preview-imgs">
                    <div class="reviews__preview-others">Ещё +5</div>
                    <img src="img/reviews1.png" alt="photo"/>
                    <img src="img/reviews2.png" alt="photo"/>
                    <img src="img/reviews3.png" alt="photo"/>
                    <img src="img/reviews4.png" alt="photo"/>
                    <img src="img/reviews5.png" alt="photo"/>
                    <img src="img/reviews3.png" alt="photo"/>
                    <img src="img/reviews3.png" alt="photo"/>
                    </div>
                </div>
                <div class="reviews__blocks">
                    <div class="reviews__block">
                        <div class="reviews__block-imgs">
                            <div class="reviews__block-img">
                                <img src="img/reviews6.png" alt="photo"/>
                                <span>Что доставили</span>
                            </div>
                            <div class="reviews__block-img">
                                <img src="img/photo1.jpg" alt="photo"/>
                                <span>Что заказывали</span>
                            </div>
                        </div>
                        <div class="reviews__autor">
                            <div class="reviews__autor-info">
                                <p class="reviews__autor-name">Елена</p>
                                <p class="reviews__autor-when">3 часа назад</p>
                            </div>
                            <div class="reviews__rating-stars">
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                            </div>
                        </div>
                        <p class="reviews__comment">Заказываю уже не первый год, всё великолепно, цветы стоят долго, есть ассортимент на любой бюджет и повод, доставка вовремя, курьеры вежливые.</p>
                    </div>
                    <div class="reviews__block">
                        <div class="reviews__block-imgs">
                            <div class="reviews__block-img">
                                <img src="img/reviews4.png" alt="photo"/>
                                <span>Что доставили</span>
                            </div>
                            <div class="reviews__block-img">
                                <img src="img/photo1.jpg" alt="photo"/>
                                <span>Что заказывали</span>
                            </div>
                        </div>
                        <div class="reviews__autor">
                            <div class="reviews__autor-info">
                                <p class="reviews__autor-name">Отправитель</p>
                                <p class="reviews__autor-when">Вчера</p>
                            </div>
                            <div class="reviews__rating-stars">
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                            </div>
                        </div>
                        <p class="reviews__comment">Отличные свежие цветы, интересные букеты, доставка четко в согласованное время. Рекомендую.</p>
                    </div>
                    <div class="reviews__block">
                        <div class="reviews__block-imgs">
                            <div class="reviews__block-img">
                                <img src="img/reviews2.png" alt="photo"/>
                                <span>Что доставили</span>
                            </div>
                            <div class="reviews__block-img">
                                <img src="img/photo1.jpg" alt="photo"/>
                                <span>Что заказывали</span>
                            </div>
                        </div>
                        <div class="reviews__autor">
                            <div class="reviews__autor-info">
                                <p class="reviews__autor-name">Отправитель</p>
                                <p class="reviews__autor-when">15 августа 2024</p>
                            </div>
                            <div class="reviews__rating-stars">
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                            </div>
                        </div>
                        <p class="reviews__comment"></p>
                    </div>
                    <div class="reviews__block">
                        <div class="reviews__block-imgs">
                            <div class="reviews__block-img">
                                <img src="img/reviews5.png" alt="photo"/>
                                <span>Что доставили</span>
                            </div>
                            <div class="reviews__block-img">
                                <img src="img/photo1.jpg" alt="photo"/>
                                <span>Что заказывали</span>
                            </div>
                        </div>
                        <div class="reviews__autor">
                            <div class="reviews__autor-info">
                                <p class="reviews__autor-name">Валерия</p>
                                <p class="reviews__autor-when">10 августа 2024</p>
                            </div>
                            <div class="reviews__rating-stars">
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                                <img src="icon/star.svg" alt="star"/>
                            </div>
                        </div>
                        <p class="reviews__comment">Заказала утром букет. Только положительные впечатления! Сервис на высоте. Оформила заявку на сайте . Мне позвонили - обговорили детали, от ... <span>Ещё</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="payment">
        <div class="container">
            <button class="payment__btn">
                <div>
                    <span class="main-title">Реквизиты магазина</span>
                    <div class="payment__answer payment__answer--display">
                        <span>ИП Волощук Оксана Владимировна
                            <br/>ИНН: 633006135703
                            <br/>ОГРН/ОГРНИП: 319508100201226
                            <br/>Юридический адрес: Московская область, город Долгопрудный
                        </span>
                        <span>Данный магазин (продавец) работает по договору услуг. ООО Точкацветов обеспечивает техническую возможность размещения и /или распространения Продавцом информации о Товаре с использованием Сайта (пункт 2.2 оферты). За обработку персональных данных также отвечает ООО Точкацветов.</span>
                    </div>
                </div>
                <img src="icon/down-big.svg" alt="arrow" class="payment__plus"/>
                <img src="icon/up-big.svg" alt="arrow" class="payment__cross payment__cross--display" style="display: none;"/>
            </button>
        </div>
    </section>
       </div>
    )
}

export default Main;