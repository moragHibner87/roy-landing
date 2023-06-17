import './form.css'

function Form(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hi')
    }
    
    return(
        <form className='' onSubmit={handleSubmit}>
            <div className='lp-form flex justify-center'>
                <div className="input-wrap error">
                    <label>שם מלא*</label>
                    <input type='text'/>
                    <small>נא למלא שדה חובה</small>
                </div>
                <div className="input-wrap">
                    <label>טלפון*</label>
                    <input type='tel'/>
                    <small></small>
                </div>
                <div className="input-wrap">
                    <label>מייל</label>
                    <input type='email'/>
                </div>
                <div className='submit-wrap flex-1'>
                    <input className='bt-primary' type='submit' value='חיזרו אליי'/>
                </div>
            </div>
            
            <div className='text-xl font-bold text-green'>מעולה! קיבלנו את הפניה ונחזור אליך בהקדם</div>
        </form>
    )
}

export default Form;