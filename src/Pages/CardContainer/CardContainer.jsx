import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import MultipleButton from '../../components/Button/MultipleButton';

const CardContainer = ({mealData}) => {
    const [card,setCard] = useState([])
    const [isShow,setIsShow] = useState(false);

    useEffect(()=>{
        setCard(mealData.slice(0,6))
    },[mealData])

    const handleShowButton = () => {
        setIsShow(prev => !prev)
        if(isShow){
            setCard(mealData.slice(0,6))
            window.scroll({
                left:0,
                top:0,
                behavior:"smooth"
            } )
        }else{
            setCard(mealData)
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
            {
                card.map(meal => <SingleCard
                    meal={meal}
                    key={meal.idCategory}
                    ></SingleCard>)
            }
        </div>
        <div className='ml-2 md:ml-0 text-center'>
        <MultipleButton onClick={handleShowButton} label={isShow ? 'Show Less' : 'Show All'}></MultipleButton>
        </div>
        </div>
    );
};

export default CardContainer;