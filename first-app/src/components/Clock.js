import { useState } from "react";

function Message(props) {
    return (
        <h1>{props.message}</h1>
    );
};

function Clock() {
    const data = new Date();
    const [defaultTime, setTime] = useState(data.toLocaleTimeString());

    function changeTime() {
        setTime(data.toLocaleTimeString());
    }

    return (
        <div>
            The current time is:
            <Message message={changeTime} onChange={changeTime}/>
        </div>
    );
};

export default Clock;