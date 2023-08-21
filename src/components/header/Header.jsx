import {NavLink } from 'react-router-dom'
import './Header.css'

import siteLogo from '../../assets/img/siteLogo.svg'
import shoppingCardIcon from '../../assets/img/shoppingCardIcon.svg'



function Header() {
  return (
    <header className='header'>
        <div className='container'>
        <div className='header__container'>
            <NavLink to="/" className='site-logo'>
                <img className='site-logo__image' src={siteLogo} alt="audiophile website white logo" width="143" height="25" />
            </NavLink>

            <nav className='sitenav'>
                <ul className='sitenav__list'>
                    <li className='sitenav__item'>
                        <NavLink to="/" className='sitenav__link'>HOME</NavLink>
                    </li>
                    <li className='sitenav__item'>
                        <NavLink to="/headphones" className='sitenav__link'>HEADPHONES</NavLink>
                    </li>
                    <li className='sitenav__item'>
                        <NavLink to="/speakers" className='sitenav__link'>SPEAKERS</NavLink>
                    </li>
                    <li className='sitenav__item'>
                        <NavLink to="/earphones" className='sitenav__link'>EARPHONES</NavLink>
                    </li>
                </ul>
            </nav>

            <button className='header__btn'>
                <img className='header__btn__icon' src={shoppingCardIcon} alt="shopping icon" width="23.33" height="20" />
            </button>
        </div>
            <hr className='header__line'/>
        </div>
    </header>
  )
}

export default Header