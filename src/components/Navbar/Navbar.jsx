import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";

const Navbar = (props) => {

    return (
        <nav
            className={style.nav}>
            <ul>
                <li className={style.item}>
                    <NavLink
                        className={({isActive}) => isActive ? style.activeLink : ''}
                        to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        className={({isActive}) => isActive ? style.activeLink : ''}
                        to='/dialogs'>
                        Messages
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        className={({isActive}) => isActive ? style.activeLink : ''}
                        to='/news'>
                        News
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink
                        className={({isActive}) => isActive ? style.activeLink : ''}
                        to='/music'>
                        Music
                    </NavLink>
                </li>
                <li
                    className={style.item}>
                    <NavLink
                        className={({isActive}) => isActive ? style.activeLink : ''}
                        to='/settings'>
                        Settings
                    </NavLink>
                </li>
            </ul>

            <h3>Friends</h3>
            <div className={style.friendBlock}>
                {props.sidebar
                    .map(item => (
                        <Friend
                            key={item.id}
                            image={item.image}
                            name={item.name}/>
                    )
                    )}
            </div>
        </nav>
    )
}

export default Navbar;