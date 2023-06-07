import {useState} from 'react';

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        password: "",
        isTouched: false
    });
    const [role, setRole] = useState("role");
    
    const handleSubmit = (e) => {
        e.prevent.default();
        getIsFormValid();
    };

    const getIsFormValid = () => {
        if (firstName && email && lastName && password.password.length >= 8 && role !== "role") {
            alert("Account created!");
            setLastName("");
            setFirstName("");
            setPassword({
                password: "",
                isTouched: "false"
            })
            setRole("role");
        } else {
            alert("Please, enter valid data!");
        }
        
    };

    return (
        <form className='registration-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <fieldset>

                <div className='field'>
                    <label htmlFor='first-name'>First name <sup style={{color:"red"}}>*</sup></label>
                    <input type="text" required name="first-name" id='first-name' placeholder='First name' className='text-input' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    
                </div>

                <div className='field'>
                    <label htmlFor='last-name'>Last name</label>
                    <input type="text" required name="last-name" id='last-name' placeholder='Last name' className='text-input' value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>

                <div className='field'>
                    <label htmlFor='user-email'>Email address <sup style={{color:"red"}}>*</sup></label>
                    <input type="email" required name="user-email" id='user-email' placeholder='Email address' className='text-input' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='field'>
                    <label htmlFor='user-password'>Password <sup style={{color:"red"}}>*</sup></label>
                    <input 
                    type="password" 
                    required name="user-password" 
                    id='user-password' 
                    placeholder='Password' 
                    className='text-input' 
                    value={password.password} 
                    onChange={e => setPassword({...password, password: e.target.value})}
                    onBlur={ e => setPassword({...password, isTouched: true})}
                    />
                    {password.isTouched && password.password.length <= 8 && <p style={{"color":"red", "font-size":"1rem"}}>Password should have at least 8 characters.</p>} 
                </div>

                <div className='field'>
                    <label htmlFor='role'>Role <sup style={{color:"red"}}>*</sup></label>
                    <select className='select-input'>
                        <option value="role">Role</option>
                        <option value="role">Individual</option>
                        <option value="role">Business</option>
                    </select>
                </div>

                <button type='submit' className='submit-button'>CREATE ACCOUNT</button>

            </fieldset>
        </form>
    );
};

export default RegistrationForm;