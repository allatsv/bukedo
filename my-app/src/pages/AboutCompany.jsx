import React from 'react'

import corporateContact from "./../assets/img/corporate-contact.png"
import aboutCompany1 from "./../assets/img/about-company1.png"
import aboutCompany2 from "./../assets/img/about-company2.png"
import aboutCompany3 from "./../assets/img/about-company3.png"
import aboutCompany4 from "./../assets/img/about-company4.png"

function AboutCompany() {
    return (
        <div>
            <section class="about-company">
                <div class="container">
                    <div class="about-company__inner">
                        <h3 class="main-title">О компании</h3>
                        <div class="about-company__how">
                            <div class="about-company__info">
                                <h4>Как это работает?</h4>
                                <p>Компания BUKEDO — российский маркетплейс, который соединяет цветочные магазины в более 200 городах России и конечного покупателя. Через нас вы можете заказать цветы как в Москве, так и с доставкой в любом другом городе страны. </p>
                                <p>Чтобы обеспечить высокое качество выполнения заказов, наша система автоматически собирает обратную связь о выполненном заказе. Клиенты ставят оценки после выполнения заказов, благодаря чему мы мониторим качество исполнения заказов и оперативно исправляем ошибки. В результате абсолютное большинство клиентов ставят оценки 5 или 4.</p>
                            </div>
                            <div class="about-company__items">
                                <div class="about-company__item">
                                    <img src={aboutCompany1} alt="photo" />
                                    <div class="about-company__item-info">
                                        <h5>Делаете заказ</h5>
                                        <p>Миссия компании BUKEDO — предоставлять покупателям лучшие цены и качество сервиса цветочных магазинов.</p>
                                    </div>
                                </div>
                                <div class="about-company__item">
                                    <img src={aboutCompany2} alt="photo" />
                                    <div class="about-company__item-info">
                                        <h5>Собираем</h5>
                                        <p>Весь процесс автоматизирован — клиент выбирает товар и делает заказ на сайте, а магазин получает заказ в своем личном кабинете и сразу приступает к сборке букета</p>
                                    </div>
                                </div>
                                <div class="about-company__item">
                                    <img src={aboutCompany3} alt="photo" />
                                    <div class="about-company__item-info">
                                        <h5>Доставляем</h5>
                                        <p>После чего доставляет заказ получателю к назначенному времени.</p>
                                    </div>
                                </div>
                                <div class="about-company__item">
                                    <img src={aboutCompany4} alt="photo" />
                                    <div class="about-company__item-info">
                                        <h5>Удобно отслеживать</h5>
                                        <p>После этого, клиенты получают SMS-уведомление о доставке.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container"> <div className="corporate__contact">
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
                        <br />Р/c 40702810962330000376
                    </p>
                </div>
                <div className="corporate__contact-block">
                    <div>
                        <p className="corporate__contact-title">Магазины</p>
                        <p className="corporate__contact-text">В октябре 2018 года в ООО «Букедо» <br />
                            проведена специальная оценка условий труда.
                            По результатам СОУТ все рабочие места соответствуют 2 классу условий труда (допустимые). Перечень
                            мероприятий по улучшению условий и охраны труда работников, на рабочих местах которых проводилась СОУТ
                            не предусмотрен.
                        </p>
                        <a href="#" className="main-btn">Адреса магазинов</a>
                    </div>
                    <img src={corporateContact} alt="photo" className="corporate__contact-img" />
                </div>
            </div>
            </div>

        </div>




    )
}

export default AboutCompany;