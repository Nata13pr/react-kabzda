import {NavLink} from "react-router-dom";

import style from './Header.module.css'

const Header = (props) => {

    return (
        <header className={style.header}>
            <img
                src='https://visualpharm.com/assets/120/Archeology-595b40b75ba036ed117d791e.svg'
                alt={'logo'}
            />
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.authLogout}>
                        Log out
                    </button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;