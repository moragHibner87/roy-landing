import React, { useState } from 'react';

import Apple from '../../assets/images/apple.svg'
import Eraser from '../../assets/images/Eraser.svg'
import BaloonOrange from '../../assets/images/baloon-orange.svg'
import ArrowDown from '../../assets/images/arrow-down.svg'

import './sec-faq.css'

function SecFAQ(){
    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (index) => {
        const newExpandedRows = [...expandedRows];
        if (newExpandedRows.includes(index)) {
          newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
        } else {
          newExpandedRows.push(index);
        }
        setExpandedRows(newExpandedRows);
      };
    
      const isRowExpanded = (index) => {
        return expandedRows.includes(index);
      };

    return(
        <section id='SecFAQ' className="sec-faq py-4">
            <div className="container relative">
                <div className='faq-images only-desk'>
                    <img className='' src={Apple} alt='Apple'/>
                    <img className='' src={Eraser} alt='Eraser'/>
                    <img className='' src={BaloonOrange} alt='baloon-orange'/>
                </div>
                <h2 className='title-42 text-center'>
                    שאלות ותשובות
                </h2>
                <div className='all-faq mx-auto'>
                    <div className={`faq-row ${isRowExpanded(0) && 'active'}`}>
                        <button onClick={() => toggleRow(0)} className='question w-100 flex items-center justify-between'>
                            <h2 className='text-xl font-medium text-blue-dark flex-1'>מה כולל הקורס?</h2>
                            <img src={ArrowDown} alt=''/>
                        </button>
                        <div className='answer' aria-expanded={isRowExpanded(0)}>
                            <div className='text-base'>
                                <ul>
                                    <li>סיפור אינטראקטיבי שנכתב ומסופר ע״י רוי הגנן</li>
                                    <li>8 שיעורים המיועדים לילדים העולים לכיתה א׳ </li>
                                    <li>מלווה באנימציה שילדים אוהבים</li>
                                    <li>אינטראקציה חוויתית ואישית בין הילד לבין רוי ורודי הארנב</li>
                                    <li>מגוון משימות הכוללות ציור, צילום, הקלטות קוליות ועוד </li>
                                    <li>כל העבודות שתכינו יישמרו בתיק עבודות אישי ומיוחד</li>
                                    <li>מתאים לילדים בגילאי 7-4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`faq-row ${isRowExpanded(1) && 'active'}`}>
                        <button onClick={() => toggleRow(1)} className='question w-100 flex items-center justify-between'>
                            <h2 className='text-xl font-medium text-blue-dark flex-1'>מה מקבלים בסיום הקורס?</h2>
                            <img src={ArrowDown} alt=''/>
                        </button>
                        <div className='answer' aria-expanded={isRowExpanded(1)}>
                            <div className='text-base'>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ad, odio tempora illum ea sit deleniti facere, voluptatum quia consectetur recusandae laudantium necessitatibus in, repellat sint. Temporibus cumque neque consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className='bt-primary block mx-auto'>אני רוצה לנסות</button>
            </div>
        </section>
    )
}

export default SecFAQ;