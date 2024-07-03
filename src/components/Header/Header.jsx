import style from './Header.module.css'


const Header = () => {

    return (
        <header className={style.header}>
            <img
                src='https://visualpharm.com/assets/120/Archeology-595b40b75ba036ed117d791e.svg'
                alt={'logo'}
            />
        </header>
    )
}

export default Header;