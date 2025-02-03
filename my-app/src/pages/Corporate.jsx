import React from 'react'
import corporateDelivery from "./../assets/img/corporate-delivery.png"
import corporateSettlement from "./../assets/img/corporate-settlement.png"
import corporateStylish from "./../assets/img/corporate-stylish.png"
import corporateContact from "./../assets/img/corporate-contact.png"
import corporateDeliveryAdapt from "./../assets/img/corporate-delivery-adapt.png"
import corporateSettlementAdapt from "./../assets/img/corporate-settlement-adapt.png"
import corporateStylishAdapt from "./../assets/img/corporate-stylish-adapt.png"
function Corporate() {
    return (
        <section className="corporate">
            <div className="container">
                <h3 className="main-title">Корпоративным клиентам</h3>
                <div className="corporate__delivery">
                    <h4 className="corporate-title">Доставка по всей России</h4>
                    <p className="corporate__delivery-info">Компания BUKEDO может организовать для вас доставку сразу в нескольких городах России. Наша цветочная сеть охватывает более 200 городов страны и 1500 окрестных населённых пунктов.</p>
                    <img src={corporateDelivery} alt="photo" className="corporate__delivery-img" />
                    <img src={corporateDeliveryAdapt} alt="photo" className="corporate__delivery-adapt" />
                </div>
                <div className="corporate__discount">
                    <h4 className="corporate-title">Скидки и бонусы</h4>
                    <ul className="corporate__discount-list">
                        <li className="corporate__discount-item">Скидки за объём (сумма всех заказов без учёта доставки)</li>
                        <ul className="corporate__discount-procent">
                            <li>от 10 000 ₽ — 3%</li>
                            <li>от 30 000 ₽ — 4%</li>
                            <li>от 60 000 ₽ — 5%</li>
                        </ul>
                        <p className='corporate__discount-attention'>Внимание! Скидка не применяется для заказов, оплаченных промокодами 
                        или бонусными рублями.</p>
                        <li className="corporate__discount-item">Бонусные рубли. Для оплаты повторных заказов возвращается 3% от суммы заказа на счёт в личном кабинете.</li>
                        <li className="corporate__discount-item">Промокоды. Можно получить из email-рассылки с промокодами.</li>
                    </ul>
                </div>
                <div className="corporate__settlement">
                    <h4 className="corporate-title">Безналичный расчёт
                        и документооборот</h4>
                    <p className="corporate__settlement-text">Вы сможете оплатить с расчётного счета вашей компании по безналу (по выставленному счёту) или картой. Чтобы получить счёт, нужно оформить заказ (или заказы если доставка в разных городах) и на странице оплаты нажать кнопку «Выставить счёт».
                        <br />Также мы предоставим все необходимые документы: договор оказания услуг и акт выполненных работ. Возможен электронный документооборот через системы «Диадок» и «СБИС».</p>
                    <img src={corporateSettlement} alt="photo" className="corporate__settlement-img" />
                    <img src={corporateSettlementAdapt} alt="photo" className="corporate__settlement-adapt" />
                </div>
                <div className="corporate__how">
                    <h4 className="corporate-title">Как получить общий
                        счёт на несколько
                        заказов
                    </h4>
                    <ul className="corporate__how-list">
                        <li className="corporate__how-item"><br />1. Создайте один или несколько заказов.</li>
                        <li className="corporate__how-item"><br />2. На странице оплаты любого из заказов нажмите кнопку «Юр. лицам: оплата по счёту».</li>
                        <li className="corporate__how-item"><br />3. В появившейся форме выберите галочками для каких заказов нужно сформировать общий счёт, заполните свои реквизиты и нажмите кнопку «Создать счёт».</li>
                        <li className="corporate__how-item"><br />4. Скидка посчитается автоматически и сумма счета будет уменьшена.</li>
                    </ul>
                </div>
                <div className="corporate__stylish">
                    <h4 className="corporate-title">Стильно и недорого</h4>
                    <p className="corporate__stylish-text">Наши флористы следят за трендами, поэтому в нашем каталоге много современных и стильных букетов, цветов в коробках и корзинах по невысоким ценам.</p>
                    <img src={corporateStylish} alt="photo" className="corporate__stylish-img" />
                    <img src={corporateStylishAdapt} alt="photo" className="corporate__stylish-adapt" />
                </div>
                <div className="corporate__contact">
                    <div className="corporate__contact-block">
                        <p className="corporate__contact-title">Поддержка и помощь</p>
                        <div className="corporate__contact-flexes">
                            <div className="corporate__contact-flex">
                                <p className="corporate__contact-text">Бесплатный звонок (только для России):</p>
                                <p className="corporate__contact-text"><span>8 800 555-26-40</span></p>
                            </div>
                            <div className="corporate__contact-flex">
                                <p className="corporate__contact-text">Звонок из других стран:</p>
                                <p className="corporate__contact-text"><span>+7 8 495 215-20-97</span></p>
                            </div>
                            <div className="corporate__contact-flex">
                                <p className="corporate__contact-text">Email:</p>
                                <p className="corporate__contact-text"><span>support@bukedo.ru</span></p>
                            </div>
                        </div>
                        <p className="corporate__contact-hours">Время работы</p>
                        <p className="corporate__contact-text">Пн-Пт: 08:00-20:00 по московскому времени (GMT +3)</p>
                    </div>
                    <div className="corporate__contact-block">
                        <p className="corporate__contact-title">Валерия</p>
                        <p className="corporate__contact-text">Руководитель клиентского
                            сервиса</p>
                        <p className="corporate__contact-email">valeriya@bukedo.ru</p>
                    </div>
                    <div className="corporate__contact-block">
                        <p className="corporate__contact-title">Юлия</p>
                        <p className="corporate__contact-text">Главный бухгалтер (по вопросам закрывающих документов)</p>
                        <p className="corporate__contact-email">vglavbuh@bukedo.ru</p>
                    </div>
                    <div className="corporate__contact-block">
                        <p className="corporate__contact-title">Реквизиты</p>
                        <p className="corporate__contact-text">ООО «Букедо»
                            <br />ИНН/КПП 6686058027/667101001
                            <br />ОГРН 5146686050638
                            <br />ПАО "Уральский банк реконструкции и развития"
                            <br />БИК 046577795
                            <br />К/c 30101810900000000795
                            <br />Р/c 40702810962330000376</p>
                    </div>
                    <div className="corporate__contact-block">
                        <div>
                            <p className="corporate__contact-title">Магазины</p>
                            <p className="corporate__contact-text">В октябре 2018 года в ООО «Букедо» <br />
                                проведена специальная оценка условий труда.
                                По результатам СОУТ все рабочие места соответствуют 2 классу условий труда (допустимые). Перечень мероприятий по улучшению условий и охраны труда работников, на рабочих местах которых проводилась СОУТ
                                не предусмотрен.
                            </p>
                            <a href="#" className="main-btn">Адреса магазинов</a>
                        </div>
                        <img src={corporateContact} alt="photo" className="corporate__contact-img" />
                    </div>
                </div>
                </div>
        </section>

    )
}



export default Corporate;