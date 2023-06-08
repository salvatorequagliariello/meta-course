import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Main() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={theme ? "light" :  "dark"}>
            <h1 className="main-h1">When it comes to dough</h1>
            <p className='main-p'>
                We are a pizza loving family. And for years, I searched and searched and searched for the perfect pizza dough recipe. I tried dozens,
                or more. And  while some were good, none of them were that recipe that would make me stop trying all of the others.
            </p>
        </div>
    )
}
export default Main;