import RudiGarden from '../../assets/images/rudi-garden.png'

import './sec-meet.css'

function SecMeet(){
    return(
        <section className="sec-meet py-4">
            <div className="container flex items-center justify-between">
                <div className='m-100 w-50 m-text-center desk-pl-1'>
                    <div className='grade-img-wrap relative inline'>
                        <img className='rudi-garden' src={RudiGarden} alt='rudi-garden'/>
                    </div>
                </div>
                <div className='m-100 w-50 desk-pr-1 text-center'>
                    <h2 className='title-42'>
                    מוכנים לצאת לדרך? 
                    <span className='text-primary block'>איזה כיף! הכירו את רודי הארנב</span>
                    </h2>

                    <div className='text-xl font-medium mb-1 mx-auto'>
                    רודי עומד לעלות לכיתה א'. 
                    <br/>
הוא מאד מתרגש, אך גם קצת חושש. 
<br/>
בגינה על יד ביתו הוא מוצא קופסא שהכין לו הקוסם צליל. כדי לפתוח אותה, עליו לבצע משימות שונות. רודי הארנב יוכל להתקדם במסע שלו רק בעזרת הפעולות שלכם!
                    </div>
                    <div className='mx-auto'>
                        <p>
                        אז תתכוננו לפעילות משפחתית מרגשת בה תצאו להרפתקה מופלאה מלאה בצחוק וכיף, במהלכה הילדים יחזקו את הידע שלהם באותיות, יציירו, ידברו איתי, יצלמו ויפתרו חידות שיעזרו להם להגיע מוכנים לכיתה א׳.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecMeet;