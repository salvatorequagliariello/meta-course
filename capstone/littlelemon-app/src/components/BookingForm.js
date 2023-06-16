
import { useReducer, useState } from "react";

const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const validateObject = {
    firstName: false,
    lastName: false,
    email: false,
    date: false,
    hour: false,
};

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [formData, setFormData] = useState({});
    const [validate, setValidate] = useState(validateObject);

    const onChange = (e) => {
        setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                    }
        )};


    const handleSubmit = e => {
        e.preventDefault()
        submitForm(formData);
    };

    const handleBlur = e => {
        e.preventDefault();
        setValidate({
            ...validate,
            [e.target.name]: true
        })
    }


    return (
        <form onSubmit={handleSubmit} className="form-container">
                <h1 className="form-h1">Booking form</h1>
                <div className="field-set">
                    <label className="text-input-label" htmlFor="firstName">First name<sup className="sup-point"> *</sup></label>
                    <input className="text-input" required type="text" placeholder="First Name" name="firstName" onBlur={(e) => handleBlur(e)} id="firstName" value={formData.firstName} onChange={e => onChange(e)}/>
                    {validate.firstName && (formData.firstName === "" || formData.firstName === undefined) && <p className="error-message">First name is required!</p>}
                </div>

                <div className="field-set">
                    <label className="text-input-label" htmlFor="lastName">Last name<sup className="sup-point"> *</sup></label>
                    <input className="text-input" type="text" placeholder="Last Name" name="lastName" id="lastName" value={formData.lastName} onChange={e => onChange(e)} onBlur={(e) => handleBlur(e)} required/>
                    {validate.lastName && (formData.lastName === "" || formData.lastName === undefined) && <p className="error-message">Last name is required!</p>}
                </div>

            <div className="field-set">
                <label className="text-input-label" htmlFor="email">Email<sup className="sup-point"> *</sup></label>
                <input className="text-input" type="email" placeholder="Email" name="email" id="email" value={formData.email} onChange={e => onChange(e)} onBlur={(e) => handleBlur(e)} required/>
                {validate.email && (formData.email === "" || formData.email === undefined) && <p className="error-message">Email is required!</p>}
            </div>

            <div className="field-set">
                <label className="text-input-label" htmlFor="date">Choose date<sup className="sup-point"> *</sup></label>
                <input className="date-input" required type="date" name="date" id="date" value={formData.date} onBlur={(e) => handleBlur(e)}
                   onChange={e => {
                       onChange(e);
                       dispatch({
                           type: 'submit-date',
                           date: new Date(e.target.value),
                        });
                    }} />
                {validate.date && (formData.date === "" || formData.date === undefined) && <p className="error-message">Date is required!</p>}
            </div>
            
            <div className="field-set">
                <label className="text-input-label" htmlFor="hour">Choose Time<sup className="sup-point"> *</sup></label>
                <select className="select-input" id="hour" name="hour" value={formData.hour} onBlur={(e) => handleBlur(e)} onChange={e => onChange(e)} required>
                    <option value="">-- Choose Time --</option>
                    {availableTimes.map(time => <option value={time} id={time} key={time}>{time}</option>)}
                </select>
                {validate.hour && (formData.hour === "" || formData.hour === undefined) && <p className="error-message">Time is required!</p>}
            </div>
                <div className="field-set">
                <label className="text-input-label" htmlFor="guests">Guests<sup className="sup-point"> *</sup></label>
                <select className="select-input" id="guests" name="guests" value={formData.guests} onChange={e => onChange(e)} required>
                    {numberOfGuests.map(number => <option value={number} id={number} key={number}>{number}</option>)}
                </select>
            </div>
            
            <div className="field-set">
                <label className="text-input-label" htmlFor="occasion">Occasion</label>
                <select className="select-input" id="occasion" name="occasion" value={formData.occasion} onChange={e => onChange(e)}>
                    <option value="" id="choose">-- Choose --</option>
                    <option value="birthday" id="birthday">Birthday</option>
                    <option value="anniversary" id="anniversary">Anniversary</option>
                </select>
            </div>

            <button type="submit" className="submit-button">Reserve a table</button>
        </form>
    )
}

export default BookingForm;