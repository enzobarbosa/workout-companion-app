import React from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import './styles/Header.css'

class Header extends React.Component {
    render () {
        return (
        <div className='menu-container'>
            <div>
                <Link to="/home"><img src='/images/logo.png' className='logo'/></Link>
            </div>
            {/* boutton permettant d'afficher l'entraînement en cours de Création */}
            <PopupState variant="popover" popupId="cart-popup">
                {(popupState) => (
                    <div>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        Mon entraînement
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <div 
                            style={{ 
                            width: '285px', 
                            height: '250px'
                            }}
                        >
                            <Cart />
                        </div>
                    </Popover>
                    </div>
                )}
            </PopupState>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="/home">Accueil</a></li>
                    <li><a class="dropdown-item" href="/Exercices">Exercices</a></li>
                    <li><a class="dropdown-item" href="/Muscles">Muscles</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/Auth">Connexion</a></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Header