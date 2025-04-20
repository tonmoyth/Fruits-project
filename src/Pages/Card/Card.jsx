import React, { useEffect, useState } from 'react';
import { getCard, removeCard } from '../../Utilitys/Card';
import SingleCard from '../SingleCard/SingleCard';
import Empty from '../Emty/Empty';

const Card = () => {
    const [card,setCard] = useState([]);

    useEffect(()=>{
        setCard(getCard())
    },[])
    
    const cardRemoveHandle = (id) => {
        removeCard(id)
        setCard(getCard())
    }

    if(card.length < 1){
        return <Empty></Empty>
    }
    return (
        <div className='md:w-11/12 mx-auto my-4'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6'>
            {
                card.map(food => <SingleCard
                    meal={food}
                    key={food.idCategory}
                    deleted={true}
                    removeFav={cardRemoveHandle}
                    ></SingleCard>)
            }
        </div>
        </div>
    );
};

export default Card;