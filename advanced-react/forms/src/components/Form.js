import {useState} from 'react';

function Form() {
    const [name, setName] = useState("");

    const handleSubmit= (e) => {
        e.prevent.default();
        setName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="Field">
                    <label htmlFor='name'>Name: </label>
                    <input type="text" placeholder="Name" name="name" id='name' onChange={e => setName(e.target.value)} />
                </div>
                <button type="submit" disabled={!name}>Submit</button>
            </fieldset>
        </form>
    );
};

export default Form;