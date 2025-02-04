import React from 'react'
import bonusSystem1 from "./../assets/img/bonussystem1.png"
import bonusSystem2 from "./../assets/img/bonussystem2.png"
import bonusSystem3 from "./../assets/img/bonussystem3.png"

function Bonussystem() {
    return (
        <section className="system">
        <div className="container">
            <h3 className="main-title">Бонусная система</h3>
            <p className="system__decrip">За каждый заказ мы возвращаем 3% от суммы заказа в виде бонусных рублей на счет в личном кабинете. <br />Эти бонусы можно потратить при оплате следующих заказов.</p>
            <div className="system__blocks">
                <div className="system__block">
                    <img src={bonusSystem1} alt="photo" />
                    <p className="system__block-title">1 шаг</p>
                    <p className="system__block-info">Сделайте заказ на сайте</p>
                </div>
                <div className="system__block">
                    <img src={bonusSystem2} alt="photo" />
                    <p className="system__block-title">2 шаг</p>
                    <p className="system__block-info">Деньги возвращаются в виде бонусных рублей</p>
                </div>
                <div className="system__block">
                    <img src={bonusSystem3} alt="photo" />
                    <p className="system__block-title">3 шаг</p>
                    <p className="system__block-info">Потратьте бонусы при оплате 
                        нового заказа!</p>
                </div>
            </div>
        </div>
    </section>

    )
}



export default Bonussystem;