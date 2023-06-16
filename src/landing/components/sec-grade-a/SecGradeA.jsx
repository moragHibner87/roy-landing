import Girl from '../../assets/images/grade-girl.png'
import GradePhone from '../../assets/images/grade-phone.png'
import Book from '../../assets/images/book.svg'
import Paint from '../../assets/images/paint.svg'

import './sec-grade-a.css'

function SecGrdeA(){
    return(
        <section id="SecGrdeA" className="sec-grade-a bg-blue-light py-4">
            <div className="container flex items-center justify-between">
                <div className='m-100 w-50 m-text-center'>
                    <div className='grade-img-wrap relative inline'>
                        <div className='grade-img-floats'>
                            <img className='iphone float1' src={GradePhone} alt="iphone"/>
                            <img className='book float2' src={Book} alt="book"/>
                            <img className='paint float1 float-delay' src={Paint} alt="paint"/>
                        </div>
                        <img className='girl' src={Girl} alt='girl'/>
                    </div>
                </div>
                <div className='m-100 w-50 desk-pr-1'>
                    <h2 className='title-42'>הכנה לכיתה א'</h2>
                    <div className='text-xl font-medium mb-1'>
                    בקרוב ילדיכם יגיעו לבית הספר ויפגשו את אותיות השפה העברית. כדי שהם יוכלו לעבור בהצלחה את האתגרים של כיתה א׳, הם חייבים להגיע עם ביטחון עצמי המבוסס על ידע ומוכנות לקראת קריאה וכתיבה.
                    </div>
                    <div>
                        <p>תקופת המעבר מגן הילדים לבית הספר עלולה לייצר חשש באופן טבעי. גם בקרב הילדים, וגם בקרב ההורים. השינוי החד כל כך שעוברים הילדים מחווית המציאות בגן לחווית המציאות בכיתה ובבית הספר, דורש היערכות נכונה, מתוכננת ורגועה. בשלב זה, אחד הדברים החשובים ביותר הוא הביטחון העצמי.
                        </p>
                        <p>
                        אם חושבים על זה.. לילד שבטוח בעצמו, יהיה קל יותר. גם מבחינה התפתחותית וחברתית, וגם ובעיקר מבחינה רגשית!
                        היכרות מינימלית עם אותיות או קושי בהבנת הקשר בין אותיות לצלילים, עלולים לפגוע ברמת הביטחון העצמי לתקופה ממושכת (6 שנות לימוד בבית ספר יסודי!)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecGrdeA;