import React from 'react';
import Zayavka from '../components/zayavka/Zayavka';
import { NavLink } from 'react-router-dom';
import { BETON_ROUTE } from '../utils/const';
import { FBS_ROUTE } from '../utils/const';
import { KERAMZITOBETON_ROUTE } from '../utils/const';
import { JBI_ROUTE } from '../utils/const';

const Shop = () => {
    let elements = [];
    let nameShop = ['Beton', 'Fbs', 'JBI', 'KeramzitB', 'Road', 'Vibrator'];
    let nameTovar = [
        'Бетон',
        'ФБС',
        'Кольца стеновые',
        'Керамзитобетон',
        'Плиты дорожные',
        'Вибратор для бетона',
    ];
    // let nameLink = [BETON_ROUTE, FBS_ROUTE, JBI_ROUTE, KERAMZITOBETON_ROUTE] // переменные для SPA роутинга;
    let aLink = [
        <a href="/beton">Подробнее</a>,
        <a href="/fbs_blocks">Подробнее</a>,
        <a href="/jbi_koltsa">Подробнее</a>,
        <a href="/keramzitobeton">Подробнее</a>,
        <a href="/road">Подробнее</a>,
        <a href="/vibrator">Подробнее</a>,
    ];
    let desc_tovar = [
        'Производство и доставка высококачественного товарного бетона и раствора всех марок.',
        'Используются в качестве основных элементов при возведении стен и устройстве фундаментов.',
        'Предлагает вам сотрудничество в сфере поставок ЖБИ изделий собственного производства.',
        'Одна из разновидностей лёгких бетонов, которые применяют в строительстве в наше время.',
        'Дорожные плиты используются для устройства дорог, площадок, тротуаров и других покрытий.',
        'Оборудование используется для уплотнения бетона, стен, полов и других конструкций.',
    ];
    // ^^^^^Локальная база данных для каталога товар из массивов^^^^

    for (let i = 0; i < nameShop.length; i++) {
        elements.push(
            <div key={i} className="products line_right line_bottom">
                <h2>{nameTovar[i]}</h2>
                <img
                    className="img_products"
                    src={`/images/main_tovar/${nameShop[i]}.jpg`}
                    alt=""
                ></img>
                <h3>{desc_tovar[i]}</h3>
                <div className="btn_wh">{aLink[i]}</div>
            </div>
        );
    }

    return (
        <div>
            <div class="container_products">
                <div class="prod_text">
                    <h1 className="ShiftLeft h1_tovar_name">Продукция</h1>
                </div>
            </div>
            <div class="all">
                <div class="tovar_shop">
                    <div class="tovar_line">{elements}</div>
                </div>
                <div class="container_main">
                    <Zayavka />
                </div>
            </div>
        </div>
    );
};

export default Shop;
