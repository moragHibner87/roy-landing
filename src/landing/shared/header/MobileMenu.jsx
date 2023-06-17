import Close from '../../assets/images/close.svg'

function MobileMenu({ isOpen, toggleMenu }){
    return(
        <nav className='menu only-tablet' aria-expanded={isOpen? 'true' : 'false'}>
            <button onClick={toggleMenu} className="app_menu_close only-tablet" aria-label="סגור תפריט">
                <img src={Close} className="" alt="סגור" />
            </button>
            <ul className='flex'>
                <li>
                    <a href="#root" onClick={toggleMenu} style={{fontWeight: 'bold'}}>ראשי</a>
                </li>
                <li>
                    <a onClick={toggleMenu} href="#SecGrdeA">הכנה לכיתה א</a>
                </li>
                <li>
                    <a onClick={toggleMenu} href="#SecNight">על הקורס</a>
                </li>
                <li>
                    <a onClick={toggleMenu} href="#SecFAQ">שאלות ותשובות</a>
                </li>
                <li>
                    <a onClick={toggleMenu} href="#SecAbout">אודות</a>
                </li>
                <li>
                    <a onClick={toggleMenu} href="#Footer">צור קשר</a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu;