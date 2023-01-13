import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Context } from '../index';
import { DELIVERY_ROUTE } from '../utils/const';
import { SHOP_ROUTE } from '../utils/const';
import { BETON_ROUTE } from '../utils/const';
import { FBS_ROUTE } from '../utils/const';
import { JBI_ROUTE } from '../utils/const';
import { KERAMZITOBETON_ROUTE } from '../utils/const';
import { AUTOBETONONASOS_ROUTE } from '../utils/const';
import { LOGIN_ROUTE } from '../utils/const';

const Header = observer(() => {
    const { user } = useContext(Context);
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.clear();
        Navigate('/');
    };
    return (
        <header id="header" className="header">
            <div className="header-container">
                <div className="header-line">
                    <a className="logo" href="/">
                        <img
                            src="images/header-logo.png"
                            width="150px"
                            height="50px"
                            alt=""
                        ></img>
                    </a>

                    <ul className="header-menu">
                        <li>
                            <NavLink to={SHOP_ROUTE}>Продукция</NavLink>
                            <ul className="drop-down_menu">
                                <div className="drop-down_menu_bg">
                                    {/* <li>
                                        <NavLink to={BETON_ROUTE}>
                                            Бетон
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <a href="/beton">Бетон</a>
                                    </li>
                                    <li>
                                        <a href="/jbi_koltsa">Кольца ЖБИ</a>
                                    </li>
                                    <li>
                                        <a href="/fbs_blocks">Блоки ФБС</a>
                                    </li>
                                    <li>
                                        <a href="/keramzitobeton">
                                            Керамзитобетон
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/autopump">Автобетононасос</a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        {/* <li><a href="#">Прайс</a></li> */}
                        <li>
                            {/* <NavLink to={DELIVERY_ROUTE}>Доставка</NavLink> */}
                            <a href="/delivery">Доставка</a>
                        </li>
                        <li>
                            <a href="#kontaktsFooter">Контакты</a>
                        </li>
                    </ul>
                    {user.isAuth === false ? (
                        <NavLink className="button_sign_in" to={LOGIN_ROUTE}>
                            Войти
                        </NavLink>
                    ) : (
                        <div>
                            <a
                                className="button_sign_in"
                                href="/"
                                onClick={() => logOut()}
                            >
                                Выйти
                            </a>
                            {localStorage.getItem('data') === 'ADMIN' ? (
                                <a
                                    className="button_sign_in"
                                    href="/admin_panel"
                                >
                                    AdminPanel
                                </a>
                            ) : (
                                <div />
                            )}
                        </div>
                    )}
                    {/* <a className="header-cart" href="#">
					<img src="images/Корзина.svg" width="65"></img>
				</a> */}
                </div>
            </div>
        </header>
    );
});

export default Header;
