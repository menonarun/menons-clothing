import React from 'react';

import {auth} from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACT</Link>
            {
                currentUser?
                (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT
                </div>):
                (<Link lassName='option' to='/signin'>SIGN IN</Link>)
            }
        </div>

    </div>

)

export default Header;