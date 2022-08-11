import React from 'react'
import './Header.css';

const navLinks = [
    "Подбор авто",
    "О компании",
    "Техцентр",
    "Отзывы",
    "Контакты"
]


const nav2Links = [
    "Каталог авто",
    "Авто с пробегом",
    "Кредит и рассрочка",
    "Спецпредложения",
    "Такси в кредит"
];

class header extends React.Component {
    render() {
        return (
            <>
                <div className="header-top__item1">
                    <div className="container">
                        <ul className="header-top__list">
                            <li className="header-top__item1"><a href="" className="header-top__link1"><i className="far fa-map-marker-alt"></i>Россия, Москва, 38КМ МКАД, 6Бс1</a></li>
                            <li className="header-top__item1"><a href="" className="header-top__link1"><i className="far fa-clock"></i>Время работы: c 08:00 до 21:00</a></li>
                            <li className="header-top__item1"><a href="" className="header-top__link1"><i className="fab fa-whatsapp"></i>Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <nav className="nav">
                    <div className="header-nav">
                        <div className="container">
                            <div className="wrapper-logo">
                                <div className="wrapper__header-nav__dashs">
                                    <span className="header-nav__dash"></span>
                                    <span className="header-nav__dash"></span>
                                    <span className="header-nav__dash"></span>
                                </div>
                                <a href="" className="header-nav__logo"><img src='./images/header-nav__logo.png' alt="" /></a>
                            </div>
                            <h3 className="header-nav__item1"><span>10 лет</span> превосходим ваши ожидания</h3>
                            <ul className="header-nav__list">
                                {navLinks.map((value) => {
                                    return <li className="header-nav__item"><a href="" className="header-nav__link" data-text={value}>{value}</a></li>
                                })}
                            </ul>
                            <div className="telephone-numbers">
                                <a href="tel:+7 (800) 551-94-31" className="telephone-number1"><i className="far fa-phone-alt"></i>+7 (800) 551-94-31</a>
                                <a href="tel:+7 (495) 292-18-67" className="telephone-number2">+7 (495) 292-18-67</a>
                            </div>
                            <a href="tel:+7 (800) 551-94-31" className="header-nav__item2">Обратный звонок</a>
                        </div>
                    </div>
                    <div className="header-nav2">
                        <div className="container">
                            <ul className="header-nav2__list">
                                {nav2Links.map((value) => {
                                    return <li className="header-nav2__item"><a href="" className="header-nav2__link">{value}<i class="fal fa-angle-down"></i></a></li>})
                                }
                            </ul>
                            <ul className="header-nav2__list2">
                                <li className="header-nav2__item2"><a href="" className="header-nav2__link2"><i className="far fa-heart"></i></a></li>
                                <li className="header-nav2__item2"><a href="" className="header-nav2__link2"><img src="./images/Vector.svg" /></a></li>
                                <li className="header-nav2__item2"><a href="" className="header-nav2__link2"><i className="far fa-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default header;
