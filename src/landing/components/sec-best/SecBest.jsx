import Best from '../../assets/images/best-app.png'
import Pen from '../../assets/images/pen.svg'
import Baloon from '../../assets/images/baloon.svg'

import './sec-best.css'

function SecBest(){
    return(
        <section className="sec-best bg-green-light py-4">
            <div className="container flex items-center justify-between desk-flex-reverse">
                <div className='m-100 w-50 m-text-center text-left'>
                    <div className='grade-img-wrap relative inline'>
                        <div className='grade-img-floats'>
                            <img className='baloon float1' src={Baloon} alt="baloon"/>
                            <img className='pen float2' src={Pen} alt="Pen"/>
                        </div>
                        <img className='Best' src={Best} alt='Best'/>
                    </div>
                </div>
                <div className='m-100 w-50 desk-pl-1'>
                    <h2 className='title-42'>אז מהי הדרך הטובה ביותר?</h2>
                    <div className='text-xl font-medium mb-1'>
                        מניסיוני כמחנך כיתות א' וב' בעבר, ילד שאינו בטוח דיו בעצמו עלול לחוות קשיים מכל מיני סוגים. כמו למשל תחושת תסכול, להרגיש שהוא "פחות מוצלח", נושא הביטחון העצמי והמוכנות בתקופת המעבר לבית הספר הוא קריטי! האופן שבו מתחיל הילד את המסע בבית הספר ישפיע ויעצב את אישיותו!                    
                    </div>
                    <div>
                        <p>
                        הדרך הטובה ביותר היא על ידי חיזוק ההיכרות עם האותיות, הצלילים והקשר ביניהם או במילים אחרות: פיתוח המודעות הפונולוגית. ילד שמגיע מוכן לכיתה א׳ הוא ילד שבטוח בעצמו. הבטחון הזה ביכולותיו, מאפשר לו להיות פנוי מבחינה רגשית ליצירת חברויות, להעשרה בתחומים שמעניינים אותו ולהתמודדות עם האתגרים והמציאות החדשה של בית הספר.                        
                        </p>
                        <p>
                            <strong>לסוד ההצלחה של הילד שלכם בכיתה א׳ קוראים דמיון בקופסא: </strong>
                        הקורס הדיגיטלי האינטראקטיבי הראשון מסוגו בישראל שמאפשר לכל ילד לחזק את הידע וההיכרות שלו עם האותיות והצלילים. הקורס מחבר בין חווית לימוד דיגיטלית לבין פעילות מוחשית, בין המסך לבין בלוק הציור והמצלמה, בין למידה מרחוק לבין יחס אישי, בין התקדמות בסיפור הדמיוני לבין משימות שמבצעים במציאות.                       
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecBest;