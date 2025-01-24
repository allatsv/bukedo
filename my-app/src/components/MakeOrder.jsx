function MakeOrder () {
    return (
        <div className="make-order">
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
                                <span>Знаю адрес</span>
                            </label>
                        </div>
                        <div className="make-order__inputs">
                            <p className="make-order__inputs-title">Нужна доставка за город? Выберите населенный пункт</p>
                            <div className="make-order__inputs-city">
                                <input placeholder="г. Москва" type="text" />
                                <img src="" alt="" />
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
                    </div>
                    <div className="make-order__info"></div>
                </div>
            </div>
        </div>
    )
}