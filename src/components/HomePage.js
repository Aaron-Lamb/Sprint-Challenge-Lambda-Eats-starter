import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../../Assets/Pizza.jpg';

const HomePage = () => {
    return(
        <div>
            <Link to='/pizza'>Build your own Pizza</Link>
            <img src={Pizza} alt='Pizza' />
        </div>
    )
}

export default HomePage;