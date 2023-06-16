
import Roy from '../../assets/images/roy.png'
import Wave from '../../assets/images/wave.svg'

import './sec-about.css'

function SecAbout(){

    return(
        <section className="sec-about bg-blue-light py-4 over-hide">
            <div className="container flex justify-between">
                <div className='m-100 w-50 m-text-center'>
                    <div className='about-img-wrap relative inline text-center'>
                        <img className='wave float1' src={Wave} alt='Wave'/>
                        <div className='about-img relative'>
                            <div className='about-name text-white'>
                                <h2 className='text-xl font-bold'>רוי גקט, יזם הקורס</h2>
                                <div className='text-base'>מעל 10 שנות נסיון בחינוך לגיל הרך</div>
                            </div>
                            <img className='img-cover' src={Roy} alt='Roy'/>
                        </div>
                    </div>
                </div>
                <div className='m-100 w-50 desk-pr-1'>
                    <h2 className='title-42'>קצת עלי</h2>
                    <div className='text-xl font-medium mb-1'>
                    שמי רוי גקט, אבל כנראה שאתם מכירים אותי בתור רוי הגנן מתכנית הטלויזיה ״החיים הסודיים של בני 5״.
                    </div>
                    <div>
                        <p>
                        בעל תואר ראשון בחינוך עם התמחות בגיל הרך, ותואר שני MA בניהול מערכות חינוך (סמינר הקיבוצים). חינכתי ילדים בכיתות א׳-ב׳ במשך 4 שנים בתל אביב. 
                        </p>
                        <p>
                        כיום אני מנהל את מקבץ "גני אשכול״ לגיל הרך בחיפה ועומד להתחיל את השנה השביעית שלי בתור גנן לגילאי 6-5 - גן חובה וטרום חובה. 
לאורך השנים הבנתי שהדרך הכי טובה ללמד ילדים היא דרך משחק. הבנתי שמשחקים המשלבים חידות, אתגרים ודמיון מאפשרים לילדים לעבור חוויה שהופכת את תהליך הלמידה למוצלח ויעיל, וביננו? גם אנחנו המבוגרים מעדיפים חוויות מאשר שיעורים. 
                        </p>
                        <p>
                        חינכתי מאות ילדים ב-10 השנים האחרונות וראיתי איך שיטת הלימוד שלי עזרה להם לבנות ביטחון עצמי ותחושת מסוגלות, עזרה להם להשתלב חברתית, ואפשרה להם להתקדם בלימודים ועוד. תמיד רציתי להעניק מהידע והתכנים שלי לעוד ועוד ילדים. ניסיתי למצוא דרך להגיע לכל ילד וילדה בישראל בצורה אישית וחווייתית, כך שירגישו כאילו הם ממש איתי בגן. 
                        </p>
                        <p>
                            <strong>כך נולד דמיון בקופסא: הקורס הדיגיטלי האינטראקטיבי הראשון בישראל,</strong><br/>
                        בו אני מלווה את הילדים בהרפתקה של רודי הארנב, מדבר איתם, מפעיל אותם ומקנה להם את אותם כלים שאפשרו למאות הילדים שחינכתי להגיע מוכנים לכיתה א׳.
                        </p>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecAbout;