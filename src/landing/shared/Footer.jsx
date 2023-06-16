
import Wizard from '../assets/images/wizard.svg'
import Tiktok from '../assets/images/tiktok.svg'
import Instag from '../assets/images/instag.svg'
import Faceb from '../assets/images/facebook.svg'
import Whats from '../assets/images/whatsapp.svg'
import Mail from '../assets/images/mail.svg'

import './footer.css'

function Footer(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hi')
    }
    return(
        <footer id="Footer" className="footer text-center">
            <div className="contanier">
                <img className='mb-1' src={Wizard} alt='wizard'/>
                <h2 className="title-42">יש לכם עוד שאלות?</h2>
                <div className='text-xl'>מוזמנים לפנות אלינו ונחזור אליכם בהקדם</div>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div>
                            <label>שם מלא*</label>
                            <input type='text'/>
                        </div>
                        <div>
                            <label>טלפון*</label>
                            <input type='tel'/>
                        </div>
                        <div>
                            <label>מייל</label>
                            <input type='email'/>
                        </div>
                        <div>
                            <input type='submit' value='חיזרו אליי'/>
                        </div>
                    </div>
                </form>
                <div className='socials flex-center'>
                    <a href='' target='_blank'>
                        <img className='' src={Tiktok} alt='Tiktok'/>
                    </a>
                    <a href='' target='_blank'>
                        <img className='' src={Instag} alt='Instag'/>
                    </a>
                    <a href='' target='_blank'>
                        <img className='' src={Faceb} alt='Faceb'/>
                    </a>
                    <a href='' target='_blank'>
                        <img className='' src={Whats} alt='Whats'/>
                    </a>
                    <a href='' target='_blank'>
                        <img className='' src={Mail} alt='Mail'/>
                    </a>
                </div>
                <div className='allrights'>© 2023  כל הזכויות שמורות לדמיון בקופסא | תנאי שימוש</div>
            </div>
        </footer>
    )
}

export default Footer;
