
function Message(props) {
    return (
        <h1>{props.message}</h1>
    );
};

function Clock() {
    const data = new Date();

    return (
        <div>
            The current time is:
            <Message message={data.toLocaleTimeString()}/>
        </div>
    );
};

export default Clock;