import Card from "./Card";
import greeksalad from '../images/greek salad.jpg';
import bruschetta from '../images/bruchetta.svg';
import dessert from '../images/lemon dessert.jpg';

const cards = [
    {
        img: greeksalad,
        title: "Greek salad",
        price: "$12.99",
        description: "The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemay croutons."
    },
    {
        img: bruschetta,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with gralic and seasoned with salt and olive oil"
    },
    {
        img: dessert,
        title: "Lemon Dessert",
        price: "$5.99",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

function Main() {
    return(
        <div className>
            {cards.map(card => {
                return(
                    <Card image={card.img} title={card.title} price={card.price} description={card.description} />)
                })}
        </div>
    );
};

export default Main;