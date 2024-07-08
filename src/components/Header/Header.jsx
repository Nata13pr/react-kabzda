import style from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={style.header}>
            <img
                src='https://visualpharm.com/assets/120/Archeology-595b40b75ba036ed117d791e.svg'
                alt={'logo'}
            />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;