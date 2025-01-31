import React, { useState } from 'react'
function Card({ title, price }) {
    let [productAdd, setProductAdd] = useState("Купить");
    let [styleBtn, setStyleBtn] = useState(false);
    const onClickAdd = () => {
        setStyleBtn(current => !current)
        if (productAdd == "Купить")
            setProductAdd(productAdd = "В корзине")
        else setProductAdd(productAdd = "Купить")
    }

    return (
        <div className='card'>
            <div className="card__inner">
                <img className='card__img' src="../img/flower-item.png" alt="" />
                <h3 className='card__name'>{title}</h3>
                <div className="card__delivery">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.25 3H8.3125C10.7912 3 13.1253 4.21025 14.6125 6.26667L15.4141 7.37512C15.5514 7.56496 15.7413 7.70687 15.9584 7.78191L17.4615 8.30151C18.3803 8.61911 19 9.51077 19 10.5151V12.3333C19 13.622 17.9926 14.6667 16.75 14.6667M16.75 14.6667C16.75 15.9553 15.7426 17 14.5 17C13.2574 17 12.25 15.9553 12.25 14.6667M16.75 14.6667C16.75 13.378 15.7426 12.3333 14.5 12.3333C13.2574 12.3333 12.25 13.378 12.25 14.6667M7.75 14.6667C7.75 15.9553 6.74264 17 5.5 17C4.25736 17 3.25 15.9553 3.25 14.6667M7.75 14.6667C7.75 13.378 6.74264 12.3333 5.5 12.3333C4.25736 12.3333 3.25 13.378 3.25 14.6667M7.75 14.6667H12.25M3.25 14.6667H1M1 10L4.375 10M2.125 6.5L6.625 6.5M10 7.66667L15.625 7.66667" stroke="#93949B" stroke-width="1.3" stroke-linecap="round" />
                    </svg>
                    <span className="card__delivery-condition">
                        350 ₽, через 2 часа
                    </span>
                </div>
                <div className="card__price-inner">

                    <div className="card__price-wrap"><h4 className='card__price'>{price} ₽ </h4></div>
                    <button onClick={onClickAdd} className={`btn-pay ${styleBtn ? 'btn-pay-active' : ""}`}>{productAdd}</button>
                </div>

            </div>
        </div>
    )
}

export default Card
