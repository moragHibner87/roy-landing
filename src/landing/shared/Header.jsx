import { useState } from 'react';

import './header.css'
import Logo from '../assets/images/logo.svg'
import Close from '../assets/images/close.svg'

function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <header className="header bg-white">
            <div className="container flex items-center justify-between">
                <a className='logo' href="" target="_blank">
                    <img src={Logo} className="" alt="דמיון בקופסא" />
                </a>
                <nav className='menu' aria-expanded={isOpen? 'true' : 'false'}>
                    <button onClick={() => setIsOpen(!isOpen)} className="app_menu_close only-tablet" aria-label="סגור תפריט">
                        <img src={Close} className="" alt="סגור" />
                    </button>
                    <ul className='flex'>
                        <li>
                            <a href="#root" onClick={() => setIsOpen(!isOpen)} style={{fontWeight: 'bold'}}>ראשי</a>
                        </li>
                        <li>
                            <a href="">הכנה לכיתה א</a>
                        </li>
                        <li>
                            <a href="">על הקורס</a>
                        </li>
                        <li>
                            <a href="">שאלות ותשובות</a>
                        </li>
                        <li>
                            <a href="">אודות</a>
                        </li>
                        <li>
                            <a href="">צור קשר</a>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setIsOpen(!isOpen)} className="app_menu_btn only-tablet" aria-label="פתח תפריט">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    )
}

export default Header;