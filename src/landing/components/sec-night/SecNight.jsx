import ShipA from '../../assets/images/ship-A.svg'
import ShipB from '../../assets/images/ship-B.svg'
import ShipC from '../../assets/images/ship-C.svg'
import Night1 from '../../assets/images/night-1.svg'
import Night2 from '../../assets/images/night-2.svg'
import Night3 from '../../assets/images/night-3.svg'
import Night4 from '../../assets/images/night-4.svg'

import './sec-night.css'

function SecNight(){
    return(
        <section id="SecNight" className="sec-night py-4 relative text-center text-white">
            <div className="container z-2">
                <div className='all-ships flex justify-center'>
                    <img className='' src={ShipA} alt='ShipA'/>
                    <img className='' src={ShipB} alt='ShipB'/>
                    <img className='' src={ShipC} alt='ShipC'/>
                </div>
                <h2 className='title-42 mx-auto'>
                    דמיון בקופסא: הקורס הדיגיטלי האינטראקטיבי הראשון בישראל
                </h2>
                <div className='text-xl text-green-light mb-1 mx-auto'>
                    הכנה חוויתית לילדים העולים לכיתה א׳
                </div>
                <div className='night-icons grid grid-cols-4'>
                    <div>
                        <img src={Night1} alt='night1'/>
                        <div className='text-base mx-auto'>
                        פיתוח וחיזוק ההיכרות עם האותיות וצליליהן 
                        (מודעות פונולוגית)
                        </div>
                    </div>
                    <div>
                        <img src={Night2} alt='night2'/>
                        <div className='text-base mx-auto'>
                        סיפור אינטראקטיבי ייחודי בו מצלמים, מדברים, מציירים ועוד
                        </div>
                    </div>
                    <div>
                        <img src={Night3} alt='night3'/>
                        <div className='text-base mx-auto'>
                        גישה במשך שנה שלמה מתאים לנייד, לטאבלט ולמחשב
                        </div>
                    </div>
                    <div>
                        <img src={Night4} alt='night4'/>
                        <div className='text-base mx-auto'>
                        בונוס: מגוון חידות, משחקים ופעילויות נוספות באתר
                        </div>
                    </div>
                </div>
                <button className='bt-primary'>אני רוצה לנסות</button>
            </div>
        </section>
    )
}

export default SecNight;