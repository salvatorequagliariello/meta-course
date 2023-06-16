
import { useReducer, useState } from "react";

const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm({availableTimes, dispatch}) {
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                    }
        )};

    const handleSubmit = e => {
        e.preventDefault()
    };

    return(

        <form onSubmit={handleSubmit}>

            <fieldset className="field-set">
                <label className="text-input-label" htmlFor="firstName">First name</label>
                <input className="text-input" type="text" placeholder="First Name" name="firstName" id="firstName" value={formData.firstName} onChange={e => onChange(e)} />

                <label className="text-input-label" htmlFor="lastName">Last name</label>
                <input className="text-input" type="text" placeholder="Last Name" name="lastName" id="lastName" value={formData.lastName} onChange={e => onChange(e)} />
            </fieldset>

            <label className="text-input-label" htmlFor="email">Email</label>
            <input className="text-input" type="email" placeholder="Email" name="email" id="email" value={formData.email} onChange={e => onChange(e)} />

            <label className="text-input-label" htmlFor="date">Choose date</label>
            <input className="date-input" type="date" name="date" id="date" value={formData.date}
                   onChange={e => {
                                    onChange(e);
                                    dispatch({
                                        type: 'submit-date',
                                        date: new Date(e.target.value),
                                      });
                                    }} />

            <label className="text-input-label" htmlFor="hour">Choose Time</label>
            <select className="select-input" id="hour" name="hour" value={formData.hour} onChange={e => onChange(e)}>
                {availableTimes.map(time => <option value={time} id={time} key={time}>{time}</option>)}
            </select>

            <label className="text-input-label" htmlFor="guests">Guests</label>
            <select className="select-input" id="guests" name="guests" value={formData.guests} onChange={e => onChange(e)}>
                {numberOfGuests.map(number => <option value={number} id={number} key={number}>{number}</option>)}
            </select>

            <label className="text-input-label" htmlFor="occasion">Occasion</label>
            <select className="select-input" id="occasion" name="occasion" value={formData.occasion} onChange={e => onChange(e)}>
                <option value="" id="choose">-- Choose --</option>
                <option value="birthday" id="birthday">Birthday</option>
                <option value="anniversary" id="anniversary">Anniversary</option>
            </select>

            <button type="submit" className="submite-button">Reserve a table</button>
        </form>
    )
}

export default BookingForm;