import React from 'react'
import '../../src/css/Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton' //it gives an effect to an icon
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <AccountCircleIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt=""
            />
            
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
