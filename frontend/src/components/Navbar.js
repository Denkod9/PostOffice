import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/Authentication/auth";

import menuSvg from "../assets/imgs/menu.svg";
import userSvg from "../assets/imgs/user.svg";

import "../assets/css/nav_menu.css";

import profile from "../assets/imgs/profile.svg";
import log_out from "../assets/imgs/logout.svg";



function DropdownItem(props) {
    return (
        <li className={`dropdownItem ${props.class}`} >
            <img src={props.img} alt={props.alt} />
            <Link to={props.to} onClick={props.click}>{props.text}</Link>
        </li>
    );
}

const Navbar = ({ logout, isAuthenticated }) => {
    // const [navigate, setNavigate] = useState(false);
    const [navigate] = useState(false)

    const logout_user = () => {
        logout();
        // setNavigate(true);
    };

    const [open, setOpen] = useState(false);
    const dropdownMenu = `dropdown_menu ${open ? "active" : "inactive"}`;

    const onMouseLeaveDropdown = () => {
        setOpen(false)
    }

    const onMouseEnterDropdown = () => {
        setOpen(true)

    };

    const guestLinksNav = () => (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">
                    Profile
                </Link>
            </li>
        </Fragment>
    );

    const guestLinks = () => (
        <Fragment>

            <DropdownItem to='/signup' img={profile} alt='Зарегестрироваться' text={<strong>Зарегестрироваться</strong>} />
            <DropdownItem class='border_logout' to='/login' img={profile} alt='Войти' text={"Войти"} />

        </Fragment>
    );

    const authLinks = () => (
        <Fragment>
            <DropdownItem to='/profile' img={profile} alt='Мой Профиль' text='Мой Профиль' />
            {/* <DropdownItem to='/' img={profile} alt='Мой Профиль' text={"My Profile"} onClick={logout_user}/> */}
            <DropdownItem class='border_logout' to='/' img={log_out} alt='Выйти' text={"Выйти"} click={logout_user} />
        </Fragment>
    );

    const authLinksNav = () => {
        if (localStorage.getItem('role') === 'SUBSCRIBER') {
            return (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my_editions">
                            Мои подписки
                        </Link>
                    </li>
                </Fragment>
            );
        }
        else if (localStorage.getItem('role') === 'POSTMAN') {
            return (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my_editions">
                            Мои подписки
                        </Link>
                    </li>
                </Fragment>
            );
        }
        else if (localStorage.getItem('role') === 'OPERATOR') {
            return (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my_editions">
                            Мои подписки
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/operator" data-bs-toggle="dropdown" aria-expanded="false">
                            Оператор
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/operator">Оператор</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                            <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                            <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                        </ul>
                    </li>
                </Fragment>
            );
        }
        else if (localStorage.getItem('role') === 'MANAGER') {
            return (
                <Fragment>

                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my_editions">
                            Мои подписки
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/operator" data-bs-toggle="dropdown" aria-expanded="false">
                            Заведующий
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/manager">Заведующий</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/manager/accounts">Аккаунты</a></li>
                            <li><a className="dropdown-item" href="/manager/addresses">Адреса</a></li>
                            <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                            <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                            <li><a className="dropdown-item" href="/manager/editions">Издания</a></li>
                            <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/manager/reports">
                            Отчеты
                        </Link>
                    </li>
                </Fragment>
            );
        }

        else if (localStorage.getItem('role') === 'ADMIN') {
            return (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/my_editions">
                            Мои подписки
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/operator" data-bs-toggle="dropdown" aria-expanded="false">
                            Оператор
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/operator">Оператор</a></li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                            <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                            <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/operator" data-bs-toggle="dropdown" aria-expanded="false">
                            Заведующий
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/manager">Заведующий</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/manager/accounts">Аккаунты</a></li>
                            <li><a className="dropdown-item" href="/manager/addresses">Адреса</a></li>
                            <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                            <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                            <li><a className="dropdown-item" href="/manager/editions">Издания</a></li>
                            <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/manager/reports">
                            Отчеты
                        </Link>
                    </li>
                </Fragment>
            );
        }
        window.location.reload()
    }

    const roles = () => {
        if (localStorage.getItem('role') === 'SUBSCRIBER')
            return (<h4>Подписчик</h4>)
        else if (localStorage.getItem('role') === 'POSTMAN')
            return (<h4>Почтальон</h4>)
        else if (localStorage.getItem('role') === 'OPERATOR')
            return (<h4>Оператор</h4>)
        else if (localStorage.getItem('role') === 'MANAGER')
            return (<h4>Заведующий</h4>)
        else if (localStorage.getItem('role') === 'ADMIN')
            return (<h4>Админ</h4>)
        else if (!localStorage.getItem('role'))
            return (<h4></h4>)

        window.location.reload()
    }

    const Anonymous = 'Гость';

    return (
        <Fragment >
            <nav className="navbar navbar-expand-lg bg-light rounded"
                aria-label="Twelfth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample10"
                        aria-controls="navbarsExample10"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='collapse navbar-collapse' id="navbarsExample10">
                        <div className="navbar-collapse">
                            <Link className="navbar-brand fs-2" to="/">
                                PostOffice
                            </Link>
                        </div>

                        <div className="navbar-collapse text-justify">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">
                                        Издания
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/my_editions">
                                        Мои подписки
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/operator" data-bs-toggle="dropdown" aria-expanded="false">
                                        Оператор
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/operator">Оператор</a></li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                                        <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                                        <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/manager" data-bs-toggle="dropdown" aria-expanded="false">
                                        Заведующий
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/manager">Заведующий</a></li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/manager/accounts">Аккаунты</a></li>
                                        <li><a className="dropdown-item" href="/manager/addresses">Адреса</a></li>
                                        <li><a className="dropdown-item" href="/operator/deliveries">Доставки</a></li>
                                        <li><a className="dropdown-item" href="/operator/districts">Участки</a></li>
                                        <li><a className="dropdown-item" href="/manager/editions">Издания</a></li>
                                        <li><a className="dropdown-item" href="/operator/postmans">Почтальоны</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/manager/reports">
                                        Отчеты
                                    </Link>
                                </li> */}
                                {/* {isAuthenticated ? authLinksNav() : guestLinksNav()} */}
                                {isAuthenticated && authLinksNav()}

                            </ul>
                        </div>

                        <div className="menu-container" onMouseEnter={onMouseEnterDropdown} onMouseLeave={onMouseLeaveDropdown}>
                            {/*<div className="menu-trigger " onClick={handlerOpened}>*/}
                            <div className="menu-trigger ">
                                <img className="menu-menu" src={menuSvg} alt="menu" />
                                <img className="menu-user" src={userSvg} alt="user" />
                            </div>
                            <div className={dropdownMenu} onClick={e => e.stopPropagation()}>
                                <h3>
                                    PostOffice <br />
                                    <span>
                                        User:
                                        <strong>
                                            {isAuthenticated ? localStorage.getItem('email') : Anonymous}
                                        </strong>
                                        <br />
                                    </span>
                                </h3>
                                <ul className="dropdown_ul">
                                    {isAuthenticated ? authLinks() : guestLinks()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >
            {navigate ? <Navigate to="/" /> : <Fragment></Fragment>}
        </Fragment >
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
