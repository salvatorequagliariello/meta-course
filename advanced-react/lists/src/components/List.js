

const desserts = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        price: "$4.50"
    },
    {
        id: "3",
        title: "Chocolate Mousse",
        description: "Unexplored flavour",
        price: "$6.00"
    }

];

function List() {
    const listData = desserts.map(dessert => {
        const dessertTitle = `${dessert.title} - ${dessert.price}`;

        return <li className="list-item">{dessertTitle}</li>;
    })

    return (
        <div className="desserts-list">
            <ul>
                {listData}
            </ul>
        </div>
    )
}

export default List;