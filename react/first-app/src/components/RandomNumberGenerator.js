

function RandomNumber() {
    const number = (Math.random() * 10).toFixed(2);
     return (
        <div>
            <p>Random number generated: <b>{number}</b></p>
        </div>
     );
};

export default RandomNumber;