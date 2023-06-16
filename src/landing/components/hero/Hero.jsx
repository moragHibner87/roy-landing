import './hero.css'
import HeroBoy from '../../assets/images/hero-boy.png'
import HeorLeft from '../../assets/images/hero-l.svg'
import HeorRight from '../../assets/images/hero-r.svg'

import HeorIc1 from '../../assets/images/hero-ic-1.svg'
import HeorIc2 from '../../assets/images/hero-ic-2.svg'
import HeorIc3 from '../../assets/images/hero-ic-3.svg'
import HeorIc4 from '../../assets/images/hero-ic-4.svg'

function Hero(){
    return(
        <section className="hero relative over-hide" id='hero'>
            <div className="container flex z-1">
                <div className="hero-content">
                    <h1 className='title-42 text-white'>דמיון בקופסא: הקורס הדיגיטלי<br/> <span className='text-yellow'>האינטראקטיבי</span> הראשון בישראל</h1>
                    <ul className='text-white ul-ok'>
                        <li>הכנה חוויתית לילדים העולים לכיתה א׳</li>
                        <li>פיתוח וחיזוק ההיכרות עם האותיות וצליליהן (מודעות פונולוגית)</li>
                        <li>סיפור אינטראקטיבי ייחודי בו מצלמים, מדברים, מציירים ועוד</li>
                        <li>גישה במשך שנה שלמה, מתאים לנייד, לטאבלט ולמחשב</li>
                        <li>בונוס: מגוון חידות, משחקים ופעילויות נוספות באתר</li>
                    </ul>
                    <button className='bt-primary'>ספרו לי עוד</button>
                </div>
                <div className='hero-hold-img m-100 text-center'>
                    <div className='hero-img-wrap relative'>
                        <div>
                            <img src={HeorIc1} className="hero-icon z-2" role='presentaition' />
                            <img src={HeorIc2} className="hero-icon z-2" role='presentaition' />
                            <img src={HeorIc3} className="hero-icon z-2" role='presentaition' />
                            <img src={HeorIc4} className="hero-icon z-2" role='presentaition' />
                        </div>
                        <img src={HeroBoy} className="hero-boy z-2" alt="ילד לומד" />
                    </div>
                </div>
            </div>
            
            <img src={HeorLeft} className="hero-l" role='presentaition' />
            <img src={HeorRight} className="hero-r only-desk-xl" role='presentaition' />
        </section>
    )
}

export default Hero;