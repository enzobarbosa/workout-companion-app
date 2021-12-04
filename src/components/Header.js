import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'

class Header extends React.Component {
    render () {
        return (
        <div className='menu-container'>
            <div>
                <img src='/images/logo.png' className='logo'/>
            </div>
            <nav className='menu'>
                <ul className='menu-list'>
                    <li className='menu-item'>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/Exercices'>Exercices</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='/Auth'>Auth</Link>
                    </li>
                </ul>
            </nav>
        </div>
        )
    }
}

export default Header