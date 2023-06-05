const ToDo = props => {
    return (
        <div>
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
        </div>
        )
};

export default ToDo;