import { useState, useEffect } from 'react';

import './header.css'
import Logo from '../../assets/images/logo.svg'
import ArrowUp from '../../assets/images/arrow-up.svg'
import MobileMenu from './MobileMenu';

function Header(){
    const [isBtVisible, setIsBtVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offsetTop = window.scrollY || document.documentElement.scrollTop;
            setIsBtVisible(offsetTop > 800);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top:0
        })
    }

    return(
        <> 
        <header className="header bg-white">
            <div className="container flex items-center justify-between">
                <a className='logo' href="" target="_blank">
                    <img src={Logo} className="" alt="דמיון בקופסא" />
                </a>
                <nav className='menu only-desk-xl'>
                    <ul className='flex'>
                        <li>
                            <a href="#root" style={{fontWeight: 'bold'}}>ראשי</a>
                        </li>
                        <li>
                            <a href="#SecGrdeA">הכנה לכיתה א</a>
                        </li>
                        <li>
                            <a href="#SecNight">על הקורס</a>
                        </li>
                        <li>
                            <a href="#SecFAQ">שאלות ותשובות</a>
                        </li>
                        <li>
                            <a href="#SecAbout">אודות</a>
                        </li>
                        <li>
                            <a href="#Footer">צור קשר</a>
                        </li>
                    </ul>
                </nav>
                <button onClick={toggleMenu} className="app_menu_btn only-tablet" aria-label="פתח תפריט">
                    <span></span><span></span><span></span>
                </button>
                <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
            </div>
        </header>

        <button className={`backtop flex-center ${isBtVisible? 'show' : ''}`} onClick={scrollToTop} aria-label='חזור למעלה' title='חזור למעלה'>
            <img src={ArrowUp} alt='חזור למעלה'/>
        </button>
        </>
    )
}

export default Header;