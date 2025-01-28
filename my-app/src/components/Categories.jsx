import React from 'react'

function Categories() {
    const [] = React.useState();
    return (
        <div className='categories'>
            <div className="container">
                <ul className='categories__list'>
                    <li className="categories__list-item">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H17M17 13H1M1 7H6M1 4H9M1 10H9" stroke="#1C1C1D" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 5.5L14 8.5L17 5.5" stroke="#1C1C1D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        По популярности
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg></li>
                    <li className="categories__list-item">Цветы
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg>
                    </li>
                    <li className="categories__list-item">Цена
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg>
                    </li>
                    <li className="categories__list-item">Цвет
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg>
                    </li>
                    <li className="categories__list-item">Повод
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg>
                    </li>
                    <li className="categories__list-item">Размер
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6.75L8.46967 11.014C8.76256 11.3287 9.23744 11.3287 9.53033 11.014L13.5 6.75" stroke="#1C1C1D" stroke-linecap="round" />
                        </svg>
                    </li>
                    <button className='categories__list-reset'>Сбросить фильтр</button>
                </ul>
            </div>

        </div>
    )
}

export default Categories;
