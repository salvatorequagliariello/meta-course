import {useState} from 'react';

function FeedbackForm() {
    const [rate, setRate] = useState(10);
    const [comment, setComment] = useState("");

    const handleSubmit = e => {
        e.prevent.default();

        if (Number(rate) <= 5 && comment.length < 10) {
            alert("Please, provide a comment explaining why the experience was poor.");
            return;
        }

        alert("Thanks!");
        setRate(10);
        setComment("");
    }

    return (
        <form className="feedform" onSubmit={handleSubmit}>
            <fieldset>
                <h2>FEEDBACK FORM</h2>
                <div className="field">
                    <label className='score'>Score: {rate} ⭐</label>
                    <input type="range" min="0" max="10" value={rate} onChange={e => setRate(e.target.value)}/>
                </div>
                <div className='comment-field'>
                    <label htmlFor='comment'>COMMENT:</label>
                    <textarea id="comment" value={comment} onChange={e => setComment(e.target.value)} />
                </div>
                <button className='submit'>SUBMIT</button>
            </fieldset>
        </form>
    );
};

export default FeedbackForm;