import React from 'react'
import logo from "./../assets/icon/logo.svg"
import call from "./../assets/icon/call.svg"
import email from "./../assets/icon/email.svg"
import whatsapp from "./../assets/icon/whatsapp.svg"
import telegram from "./../assets/icon/telegram.svg"




const Footer = () => {
    return (
        <footer className="footer">
            <div className="imgs">
                <img src="img/flowers-footer1.png" alt="#" />
                <img src="img/flowers-footer4.png" alt="#" />
                <img src="img/flowers-footer5.png" alt="#" />
                <img src="img/flowers-footer3.png" alt="#" />
                <img src="img/flowers-footer2.png" alt="#" />
                <img src="img/flowers-footer6.png" alt="#" />
            </div>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__info">
                            <a href="index.html"><img src={logo} alt="logo" className="logo" /></a>
                            <p className="footer__info-descrip">Продавайте на Букедо</p>
                            <a href="#" className="main-btn">Стать продавцом</a>
                        </div>
                        <nav className="footer__nav">
                            <h5 className="footer__nav-title">Покупателям</h5>
                            <div className="footer__nav-lists">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item"><a href="#">Адреса магазинов</a></li>
                                    <li className="footer__nav-item"><a href="#">О компании</a></li>
                                    <li className="footer__nav-item"><a href="#">Оплата и доставка</a></li>
                                    <li className="footer__nav-item"><a href="#">Бонусная программа</a></li>
                                </ul>
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item"><a href="#">Отзывы</a></li>
                                    <li className="footer__nav-item"><a href="#">Корпоративным клиентам</a></li>
                                    <li className="footer__nav-item"><a href="#">Правила сайта</a></li>
                                    <li className="footer__nav-item"><a href="#">Политика обработки данных</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="footer__connect">
                            <h5 className="footer__connect-title">Мы на связи</h5>
                            <div className="footer__connect-blocks">
                                <div className="footer__connect-block">
                                    <a href="#">
                                        <img src={call} alt="call" />
                                        <div className="connect-info">
                                            <p className="connect-title">8 495 215-20-97</p>
                                            <p className="connect-descrip">с 8:00 до 20:00</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="footer__connect-block">
                                <a href="#">
                                    <img className="footer__connect-whatsapp" src={whatsapp} alt="WhatsApp" />
                                    
                                </a>
                                <div className="connect-info">
                                        <p className="connect-title">WhatsApp</p>
                                        <p className="connect-descrip">+7 961 777-2640</p>
                                    </div>
                            </div>

                            <div className="footer__connect-block">
                                <a href="#">
                                    <img src={email} alt="email" />
                                    
                                </a>
                                <div className="connect-info">
                                        <p className="connect-title">hello@bukedo.ru</p>
                                        <p className="connect-descrip">поддержка 24/7</p>
                                    </div>
                            </div>
                            <div className="footer__connect-block">
                            <a href="#">
                                <img className="footer__connect-telegram" src={telegram} alt="telegram" />
                                
                            </a>
                            <div className="connect-info">
                                    <p className="connect-title">Telegram</p>
                                    <p className="connect-descrip">@Bukedo</p>
                                </div>

                        </div>
                            </div>

                           


                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__copy">© 2014 – 2024 «БУКЕДО»</p>
                <div className="footer__pay">
                    <svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8701 21.9065H14.709L12.3386 12.5972C12.2261 12.169 11.9872 11.7904 11.6358 11.612C10.7588 11.1636 9.79249 10.8068 8.73828 10.6268V10.2684H13.8305C14.5333 10.2684 15.0604 10.8068 15.1483 11.432L16.3782 18.1471L19.5377 10.2684H22.6109L17.8701 21.9065ZM24.368 21.9065H21.3826L23.8409 10.2684H26.8262L24.368 21.9065ZM30.6886 13.4925C30.7764 12.8657 31.3035 12.5073 31.9185 12.5073C32.8848 12.4173 33.9375 12.5973 34.816 13.0441L35.3431 10.5384C34.4646 10.18 33.4982 10 32.6213 10C29.7238 10 27.6153 11.6121 27.6153 13.8494C27.6153 15.5514 29.1088 16.4451 30.163 16.9835C31.3035 17.5203 31.7428 17.8787 31.6549 18.4156C31.6549 19.2208 30.7764 19.5792 29.8995 19.5792C28.8452 19.5792 27.791 19.3108 26.8262 18.8624L26.2991 21.3697C27.3533 21.8166 28.4938 21.9965 29.548 21.9965C32.797 22.085 34.816 20.4745 34.816 18.0572C34.816 15.013 30.6886 14.8346 30.6886 13.4925ZM45.264 21.9065L42.8936 10.2684H40.3475C39.8204 10.2684 39.2933 10.6268 39.1176 11.1636L34.7281 21.9065H37.8014L38.4148 20.206H42.1908L42.5422 21.9065H45.264ZM40.7867 13.4026L41.6636 17.7888H39.2054L40.7867 13.4026Z" fill="#93949B"/>
</svg>

                    <svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9993 8.73002C26.8793 8.82402 26.7633 8.91702 26.6503 9.01802C24.6953 10.723 23.4663 13.218 23.4663 16C23.4663 18.782 24.6943 21.277 26.6383 22.973L26.6493 22.982C26.7613 23.082 26.8803 23.179 26.9983 23.272C27.1183 23.18 27.2343 23.082 27.3473 22.982C29.3023 21.277 30.5303 18.782 30.5303 16C30.5303 13.218 29.3023 10.723 27.3583 9.02702L27.3473 9.01802C27.2353 8.91802 27.1173 8.82302 26.9983 8.73002H26.9993ZM32.7203 6.74502C32.7153 6.74502 32.7093 6.74502 32.7023 6.74502C30.7993 6.74502 29.0323 7.32202 27.5643 8.31102L27.5973 8.29002C27.6723 8.34902 27.7403 8.41102 27.8023 8.47602L27.8033 8.47702C29.9193 10.313 31.2493 13.005 31.2493 16.008C31.2493 19.004 29.9263 21.69 27.8323 23.515L27.8203 23.525C27.7483 23.586 27.6703 23.647 27.5943 23.707C29.0353 24.677 30.8103 25.256 32.7193 25.256C37.8313 25.256 41.9753 21.112 41.9753 16C41.9753 10.888 37.8323 6.74602 32.7203 6.74502ZM26.1793 23.526C26.2513 23.587 26.3293 23.648 26.4053 23.708C24.9653 24.677 23.1913 25.255 21.2823 25.255C16.1703 25.255 12.0273 21.111 12.0273 16C12.0273 10.889 16.1713 6.74502 21.2823 6.74502C23.1893 6.74502 24.9623 7.32202 26.4353 8.31102L26.4023 8.29002C26.3273 8.34902 26.2593 8.41102 26.1973 8.47602L26.1963 8.47702C24.0803 10.313 22.7503 13.005 22.7503 16.008C22.7503 19.004 24.0733 21.69 26.1673 23.515L26.1793 23.526Z" fill="#93949B"/>
</svg>

<svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18189_1469)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5098 10.2858H34.918C35.3261 12.8164 37.7751 15.1837 40.469 15.1837H46.5098C46.5914 14.9388 46.5914 14.6123 46.5914 14.3674C46.5914 12.0817 44.7955 10.2858 42.5098 10.2858Z" fill="#93949B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5703 15.5919V21.7144H39.2438V18.4491H42.5091C44.305 18.4491 45.856 17.2246 46.3458 15.5919H35.5703Z" fill="#93949B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5117 10.2858V21.7143H25.777C25.777 21.7143 26.5934 21.7143 27.0015 20.898C29.2056 16.4898 29.8587 15.1837 29.8587 15.1837H30.2668V21.7143H33.9403V10.2858H30.675C30.675 10.2858 29.8587 10.3674 29.4505 11.1021C27.5729 14.8572 26.5934 16.8164 26.5934 16.8164H26.1852V10.2858H22.5117Z" fill="#93949B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.7143V10.2858H10.6735C10.6735 10.2858 11.7347 10.2858 12.3061 11.9184C13.7755 16.245 13.9388 16.8164 13.9388 16.8164C13.9388 16.8164 14.2653 15.7552 15.5714 11.9184C16.1429 10.2858 17.2041 10.2858 17.2041 10.2858H20.8776V21.7143H17.2041V15.5919H16.7959L14.7551 21.7143H13.1224L11.0816 15.5919H10.6735V21.7143H7Z" fill="#93949B"/>
</g>
<defs>
<clipPath id="clip0_18189_1469">
<rect width="40" height="11.4286" fill="white" transform="translate(7 10.2858)"/>
</clipPath>
</defs>
</svg>

<svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18189_1475)">
<path d="M42.061 13.9288V18.838H40.3081V15.3943H38.6202V18.838H36.8672V13.9285H42.061V13.9288Z" fill="#93949B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2702 19.0134C34.8396 19.0134 36.0049 18.0513 36.0049 16.5928C36.0049 15.181 35.1452 14.2644 33.7083 14.2644C33.0451 14.2644 32.4979 14.4978 32.0858 14.9006C32.1842 14.0681 32.8882 13.4603 33.6633 13.4603C33.8421 13.4603 35.1888 13.4575 35.1888 13.4575L35.9502 12C35.9502 12 34.2596 12.0385 33.4737 12.0385C31.6778 12.0699 30.4648 13.7023 30.4648 15.6847C30.4648 17.9945 31.6479 19.0136 33.2704 19.0136L33.2702 19.0134ZM33.2799 15.5552C33.8625 15.5552 34.2665 15.938 34.2665 16.5926C34.2665 17.1816 33.9076 17.6672 33.2799 17.6686C32.6795 17.6686 32.2756 17.2188 32.2756 16.6027C32.2756 15.9479 32.6795 15.5552 33.2799 15.5552Z" fill="#93949B"/>
<path d="M29.0379 17.1945C29.0379 17.1945 28.6239 17.4331 28.0054 17.4783C27.2947 17.4994 26.6614 17.0504 26.6614 16.2528C26.6614 15.4747 27.2203 15.0287 27.9877 15.0287C28.4582 15.0287 29.0807 15.3548 29.0807 15.3548C29.0807 15.3548 29.5362 14.519 29.7721 14.101C29.3401 13.7735 28.7646 13.594 28.0953 13.594C26.406 13.594 25.0977 14.6954 25.0977 16.2429C25.0977 17.8101 26.3274 18.8859 28.0953 18.8533C28.5894 18.8349 29.2711 18.6615 29.6866 18.3946L29.0379 17.1945Z" fill="#93949B"/>
<path d="M7.48047 10.3307L9.91216 14.6772V17.3284L7.48331 21.6663L7.48047 10.3307Z" fill="#93949B"/>
<path d="M16.8164 13.0956L19.095 11.6991L23.7582 11.6947L16.8164 15.9473V13.0956Z" fill="#93949B"/>
<path d="M16.8034 10.3051L16.8163 16.0597L14.3789 14.5621V5.95996L16.8034 10.3051Z" fill="#93949B"/>
<path d="M23.7581 11.6946L19.0947 11.699L16.8034 10.3051L14.3789 5.95996L23.7581 11.6946Z" fill="#93949B"/>
<path d="M16.8163 21.6905V18.8985L14.3789 17.4293L14.3802 26.04L16.8163 21.6905Z" fill="#93949B"/>
<path d="M19.0901 20.3066L9.91199 14.6772L7.48047 10.3307L23.7491 20.3009L19.0901 20.3066Z" fill="#93949B"/>
<path d="M14.3828 26.0399L16.8185 21.6904L19.0914 20.3066L23.7505 20.3009L14.3828 26.0399Z" fill="#93949B"/>
<path d="M7.48438 21.6664L14.4008 17.4295L12.0755 16.0028L9.91322 17.3284L7.48438 21.6664Z" fill="#93949B"/>
</g>
<defs>
<clipPath id="clip0_18189_1475">
<rect width="40" height="20.08" fill="white" transform="translate(7 5.95996)"/>
</clipPath>
</defs>
</svg>

                </div>

            </div>

        </footer>
    )
}
export default Footer;
