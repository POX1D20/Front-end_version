import React from 'react';
import Zayavka from '../components/zayavka/Zayavka';
import { NavLink } from 'react-router-dom';
// import { DELIVERY_ROUTE } from '../utils/const';
import { BETON_ROUTE } from '../utils/const';
import { FBS_ROUTE } from '../utils/const';
import { KERAMZITOBETON_ROUTE } from '../utils/const';
// import { AUTOBETONONASOS_ROUTE } from '../utils/const';
import { JBI_ROUTE } from '../utils/const';
// import { createAppl } from "../http/DeviceApi";

const Main = () => {
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
        '/beton',
        '/fbs_blocks',
        '/jbi_koltsa',
        '/keramzitobeton',
        '/road',
        '/vibrator',
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
                <a href={aLink[i]}>
                    <img
                        className="img_products"
                        src={`/images/main_tovar/${nameShop[i]}.jpg`}
                        alt=""
                    ></img>
                </a>
                <h3>{desc_tovar[i]}</h3>
                <div className="btn_wh">
                    <a href={aLink[i]}>Подробнее</a>
                </div>
            </div>
        );
    }

    return (
        <div className="all">
            {/* Слайдер */}
            <div className="headnone slider">
                {/* Товарный бетон */}
                <div className="G_text_header slider__item">
                    <div className="G_text">
                        <h1>Товарный бетон</h1>
                    </div>
                    <div className="g2_text">
                        <p>
                            ООО «КСМ-8» производит товарный бетон и раствор от
                            М-100 до М-400. Осуществляет доставку бетона в
                            Ростове-на-Дону и по Ростовской области (Батайск,
                            Азов, Аксай, Новочеркасск, Зерноград и прочие).
                        </p>
                    </div>

                    <div className="btns">
                        <div className="btn_zakaz">
                            {/* <NavLink to={DELIVERY_ROUTE}>Заказать</NavLink> */}
                            <a href="/delivery">Заказать</a>
                        </div>
                        <div className="btn_podrobno">
                            {/* <NavLink to={BETON_ROUTE}>Подробнее</NavLink> */}
                            <a href="/beton">Подробнее</a>
                        </div>
                    </div>
                </div>

                {/* Керамзитобетон и керамзит */}
                <div className="G_text_header slider__item">
                    <div className="G_text">
                        <h1>Керамзитобетон и керамзит</h1>
                    </div>
                    <div className="g2_text">
                        <p>
                            Теперь, в нашей компании, вы можете купить <br></br>{' '}
                            керамзитобетон и керамзит разных фракций и марок.
                        </p>
                    </div>

                    <div className="btns">
                        <div className="btn_zakaz">
                            <a href="/delivery">Заказать</a>
                        </div>
                        <div className="btn_podrobno">
                            <a href="/keramzitobeton">Подробнее</a>
                        </div>
                    </div>
                </div>

                {/* Автобетононасос */}
                <div className="G_text_header slider__item">
                    <div className="G_text">
                        <h1>Услуги автобетононасоса</h1>
                    </div>
                    <div className="g2_text">
                        <p>
                            Предлагаем услугу:{' '}
                            <a href="/autopump" className="black_text">
                                аренда автобетононасоса в Ростове-на-Дону
                            </a>
                            <br></br> и области. В нашей компании свой автопарк
                            автобетононасосов <br></br> высотой подачи от 20 до
                            52 метров.
                        </p>
                    </div>

                    <div className="btns">
                        <div className="btn_zakaz">
                            <a href="/delivery">Заказать</a>
                        </div>
                        <div className="btn_podrobno">
                            <a href="/autopump">Подробнее</a>
                        </div>
                    </div>
                </div>

                {/* ФБС */}
                <div className="G_text_header slider__item">
                    <div className="G_text">
                        <h1>Фундаментные блоки-ФБС</h1>
                    </div>
                    <div className="g2_text">
                        <p>
                            ООО «КСМ-8» производит фундаментные блоки различных
                            размеров. Доставку фундаментных блоков осуществляем
                            по Ростову на Дону в все города Ростовской области
                            такие как Батайск, Азов, Таганрог, Аксай, Егорлык,
                            Кагальницкое и т.д.
                        </p>
                    </div>

                    <div className="btns">
                        <div className="btn_zakaz">
                            <a href="/delivery">Заказать</a>
                        </div>
                        <div className="btn_podrobno">
                            <a href="/fbs_blocks">Подробнее</a>
                        </div>
                    </div>
                </div>

                {/* Производство на Новороссийском цементе */}
                <div className="G_text_header slider__item">
                    <div className="G_Nov_text">
                        <h1>Производство на Новороссийском цементе</h1>
                    </div>
                    <div className="g2_text">
                        <p>
                            Производство бетона осуществляется исключительно на
                            Новороссийском портланд цементе M—500
                            сульфатостойкий, поставляемый напрямую заводом
                            производителем транспортной компанией «ЮТК».
                        </p>
                    </div>

                    <div className="btns_Nov">
                        <div className="btn_zakaz">
                            <a href="/delivery">Заказать</a>
                        </div>
                        <div className="btn_podrobno">
                            <a href="/beton">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tovar">
                <div className="catalog_bg">
                    <h1 className="catalog_text">
                        <b>КАТАЛОГ ТОВАРОВ И УСЛУГ</b>
                    </h1>
                    <div className="tovar_line">{elements}</div>
                </div>
            </div>

            <div className="container_main">
                <div className="main_text">
                    <h1>
                        <b>Актуальные цены на продукцию ООО "КСМ-8"!</b>
                    </h1>
                    <table id="table1">
                        <h3 className="tableH3">Товарный бетон</h3>
                        <tr>
                            <th>Бетон</th>
                            <th>Цена</th>
                            <th>НДС</th>
                        </tr>
                        <tr>
                            <td>M100</td>
                            <td>3600 руб</td>
                            <td>3850 руб</td>
                        </tr>
                        <tr>
                            <td>M150</td>
                            <td>3700 руб</td>
                            <td>4000 руб</td>
                        </tr>
                        <tr>
                            <td>M200</td>
                            <td>3800 руб</td>
                            <td>4100 руб</td>
                        </tr>
                        <tr>
                            <td>M250</td>
                            <td>4000 руб</td>
                            <td>4400 руб</td>
                        </tr>
                        <tr>
                            <td>M300</td>
                            <td>4300 руб</td>
                            <td>4700 руб</td>
                        </tr>
                        <tr>
                            <td>M350</td>
                            <td>4500 руб</td>
                            <td>4950 руб</td>
                        </tr>
                        <tr>
                            <td>M400</td>
                            <td>4700 руб</td>
                            <td>5150 руб</td>
                        </tr>
                    </table>

                    <table id="table2">
                        <h3 className="tableH3">Блоки ФБС</h3>
                        <tr>
                            <th>ФБС</th>
                            <th>Масса</th>
                            <th>Цена</th>
                        </tr>
                        <tr>
                            <td>24.3.6</td>
                            <td>970 кг</td>
                            <td>1700 руб</td>
                        </tr>
                        <tr>
                            <td>12.3.6</td>
                            <td>485 кг</td>
                            <td>1050 руб</td>
                        </tr>
                        <tr>
                            <td>9.3.6</td>
                            <td>350 кг</td>
                            <td>850 руб</td>
                        </tr>
                        <tr>
                            <td>24.4.6</td>
                            <td>1300 кг</td>
                            <td>2000 руб</td>
                        </tr>
                        <tr>
                            <td>12.4.6</td>
                            <td>640 кг</td>
                            <td>1200 руб</td>
                        </tr>
                        <tr>
                            <td>9.4.6</td>
                            <td>470 кг</td>
                            <td>950 руб</td>
                        </tr>
                        <tr>
                            <td>24.5.6</td>
                            <td>1600 кг</td>
                            <td>2500 руб</td>
                        </tr>
                        <tr>
                            <td>12.5.6</td>
                            <td>790 кг</td>
                            <td>1450 руб</td>
                        </tr>
                        <tr>
                            <td>9.5.6</td>
                            <td>490 кг</td>
                            <td>1150 руб</td>
                        </tr>
                        <tr>
                            <td>24.6.6</td>
                            <td>1900 кг</td>
                            <td>2950 руб</td>
                        </tr>
                        <tr>
                            <td>12.6.6</td>
                            <td>1600 кг</td>
                            <td>1650 руб</td>
                        </tr>
                        <tr>
                            <td>9.6.6</td>
                            <td>700 кг</td>
                            <td>1300 руб</td>
                        </tr>
                    </table>
                    <h1 className="main_text_h1 h1_text">Наша компания</h1>
                    <h2 className="main_text_h2">О НАС</h2>
                    <p className="main_text_p">
                        Компания ООО «КСМ-8» предлагает бетон собственного
                        производства. Мы обеспечиваем наших клиентов высоким
                        уровнем качества строительной продукции по
                        конкурентоспособным ценам. Долговечность нашей компании
                        достигается путем удовлетворенности клиентов во всех
                        аспектах, в том числе своевременность и внимание к
                        деталям. Мы придерживаемся принципов профессионализма,
                        добросовестности, честности и справедливости в
                        отношениях с нашими поставщиками, субподрядчиками,
                        профессиональными партнерами и клиентами. Наша компания
                        является одой из ведущих бетонных заводов, среди
                        динамично развивающихся производителей товарного бетона
                        (раствора), ЖБИ изделий в г.Ростове-на-Дону и Ростовской
                        области.
                    </p>

                    <h2 className="main_text_h2">ПРОИЗВОДСТВО</h2>
                    <p className="main_text_p">
                        Наш бетонный завод производит бетон на протяжении 10
                        лет. За это время мы приобрели огромный опыт как в
                        производстве бетона, так и в его реализации. В нашем
                        распоряжении собственный автопарк бетоносмесителей и
                        автобетононасосов. Мы предлагаем бетон от
                        <span className="black_text"> М100 </span>
                        до <span className="black_text"> М400 </span> в любых
                        объемах от производителя. Кроме того, наша компания
                        обладает большим опытом в сфере реализации бетона с
                        доставкой. У нас можно приобрести бетон в любом объеме,
                        в том числе с доставкой в любую точку Ростовской
                        области.
                    </p>
                    <h2 className="main_text_h2">ДОСТАВКА</h2>
                    <p className="main_text_p">
                        Мы осуществляет доставку бетона и раствора по Ростову и
                        всей Ростовской области. <br></br>Стоимость услуг Вы
                        можете уточнить по телефону:
                        <span className="black_text"> +7 (928) 124-51-80</span>.
                    </p>
                </div>
            </div>

            <div className="advantages_bg">
                <h2 className="preimushestva">НАШИ ПРЕИМУЩЕСТВА:</h2>
                <div className="advantages_block">
                    <div className="wrapper">
                        <div className="advantages_img_block">
                            <img
                                src="images/advantages/Prices.png"
                                alt=""
                            ></img>
                            <p>Цены от производителя, одни из самых низких</p>
                        </div>
                        <div className="advantages_img_block">
                            <img
                                src="images/advantages/car_park.png"
                                alt=""
                            ></img>
                            <p>
                                Собственный автопарк бетононасосов и
                                бетоносмесителей
                            </p>
                        </div>
                        <div className="advantages_img_block">
                            <img src="images/advantages/time.png" alt=""></img>
                            <p>Любые объёмы продукции в кратчайшие сроки</p>
                        </div>
                        {/* </div>
                    <div className="wrapper"> */}
                        <div className="advantages_img_block">
                            <img
                                src="images/advantages/Mixture.png"
                                alt=""
                            ></img>
                            <p>Делаем любой состав бетона по Вашему заказу</p>
                        </div>
                        <div className="advantages_img_block">
                            <img src="images/advantages/sale.png" alt=""></img>
                            <p>Постоянным клиентам постоянно растущие скидки</p>
                        </div>
                    </div>
                </div>
                {/* <ul className="advantages">
							<li>Цены от производителя, одни из самых низких;</li>
							<li>Собственный автопарк автобетононасосов и бетоносмесителей;</li>
							<li>Любые объёмы продукции в кратчайшие сроки;</li>
							<li>Делаем любой состав бетона по Вашему заказу;</li>
							<li>Постоянным клиентам постоянно растущие скидки.</li>
						</ul> */}
                <a href="https://ru.freepik.com/free-photo/businessman-touching-the-tip-of-a-bar-chart_985252.htm#query=%D0%9F%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0&position=10&from_view=search">
                    Изображение от jannoon028
                </a>{' '}
                на Freepik
            </div>

            {/* Блок коммерческое предложение временно убран----------------------------------------------------------------------	 */}
            {/* <div className="offer">
                        <a href="https://beton61.ru/docs/kom-beton.xls">
                            Скачать коммерческое предложение ООО «КСМ-8»
                        </a>
                    </div>
                    <p className="desc_offer">
                        <i>
                            {' '}
                            Ваше с нами сотрудничество поможет Вам добиваться
                            максимальной выгоды, используя наше основное
                            достоинство и преимущество: оптимальное соотношение
                            цены и качества производимого нами товарного бетона
                            всех известных марок и лучшего качества.
                        </i>
                    </p> */}

            <div className="container_main">
                <div className="main_text">
                    <h2 className="main_text_h2">МЫ ГОТОВЫ ПРЕДЛОЖИТЬ ВАМ:</h2>
                    <p className="main_text_p">
                        <br></br> 1. Низкие цены на товарный бетон и ЖБИ.
                        <br></br> 2. Высокое качество продукции.
                        <br></br> 3. Собственный автопарк.
                        <br></br> 4. Доставка по городу и области.
                        <br></br> 5. Скидки постоянным клиентам.
                        <br></br> 6. Возможность оплаты по безналу.
                        <br></br> 7. Возможность доставки в день обращения.
                        <br></br> 8. Возможность заказа бетона в любом
                        количестве.
                    </p>
                </div>
            </div>

            <div className="Partners_bg">
                <h2>НАШИ ПАРТНЕРЫ:</h2>
                <div className="Partners">
                    <div className="Partners_lv1">
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/RMMP.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/nznp.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/Refrig.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/yug_ru.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                    </div>

                    <div className="Partners_lv1">
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/clean_city.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/eldako.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>
                        <div className="Partners_lv2">
                            <a href="/">
                                <img
                                    src="images/partners/bonum.png"
                                    alt=""
                                ></img>
                            </a>
                        </div>

                        <div className="Partners_lv2">
                            <div className="Partners_lv3">
                                <a href="/">
                                    <img
                                        src="images/partners/smart_clinik.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                            <div className="Partners_lv3">
                                <a href="/">
                                    <img
                                        src="images/partners/voentelekom.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="rawpixel"
                    href="https://ru.freepik.com/free-photo/_15601259.htm#query=%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D1%91%D1%80%D1%8B&position=1&from_view=search&track=sph"
                >
                    Изображение от rawpixel.com
                </a>{' '}
                на Freepik
            </div>
            <div className="container_main">
                <div className="main_text"></div>
                <Zayavka />
            </div>
        </div>
    );
};

export default Main;
