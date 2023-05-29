import { useState, useEffect } from "react";

function Message(props) {
    return (
        <h1>{props.message}</h1>
    );
};

function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (
        <div className="clock-container">
            The current time is:
            <Message message={date.toLocaleTimeString()}/>
        </div>
    );
};

export default Clock;