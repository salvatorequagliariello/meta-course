import { useReducer, useState } from "react";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BookingForm() {
    const [formData, setFormData] = useState({});
    const [firstName, seFirsttName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = e => {

    };

    return(
        <form>

            <fieldset className="field-set">
                <label className="text-input-label" htmlFor="firstName">First name</label>
                <input className="text-input" type="text" placeholder="First Name" name="firstName" id="firstName" value={firstName} onChange={e => seFirsttName(e.target.value)} />

                <label className="text-input-label" htmlFor="lastName">Last name</label>
                <input className="text-input" type="text" placeholder="Last Name" name="lastName" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </fieldset>

            <label className="text-input-label" htmlFor="email">Email</label>
            <input className="text-input" type="email" placeholder="Email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

            <label className="text-input-label" htmlFor="date">Choose date</label>
            <input className="date-input" type="date" name="date" id="date" value={date} onChange={e => setDate(e.target.value)} />

            <label className="text-input-label" htmlFor="hour">Choose Time</label>
            <select className="select-input" id="hour" name="hour" value={hour} onChange={e => setHour(e.target.value)}>
                {availableTimes.map(time => <option value={time} id={time} key={time}>{time}</option>)}
            </select>

            <label className="text-input-label" htmlFor="guests">Guests</label>
            <select className="select-input" id="guests" name="guests" value={guests} onChange={e => setGuests(e.target.value)}>
                {numberOfGuests.map(number => <option value={number} id={number} key={number}>{number}</option>)}
            </select>

            <label className="text-input-label" htmlFor="occasion">Occasion</label>
            <select className="select-input" id="occasion" name="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option value="" id="choose">-- Choose --</option>
                <option value="birthday" id="birthday">Birthday</option>
                <option value="anniversary" id="anniversary">Anniversary</option>
            </select>

            <button type="submit" className="submite-button">Reserve a table</button>


        </form>
    )
}

export default BookingForm;