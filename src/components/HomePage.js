import React from 'react';
import { Link } from 'react-router-dom';
import Pizza from '../Assets/Pizza.jpg';
import styled from 'styled-components';
import '../App.css'

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50%;
    width: 100%;
    `

const HomeImage = styled.img`
    height: 40vh;
    width: 40%;
`

const HomePage = () => {
    return(
        <HomeDiv>
            <Link to='/pizza' className='Links'>Build your own Pizza</Link>
            <HomeImage src={Pizza} alt='Pizza' />
        </HomeDiv>
    )
}

export default HomePage;