import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import CardContainer from '../CardContainer/CardContainer';

const Home = () => {
    const mealData = useLoaderData();
    

    return (
        <div className='min-h-[calc(100vh-305px)] md:w-11/12 mx-auto mt-4 space-y-4'>
            <Banner></Banner>
            <CardContainer mealData={mealData}></CardContainer>
        </div>
    );
};

export default Home;