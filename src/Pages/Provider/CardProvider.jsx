import React, { useEffect, useState } from 'react';

import { getCard } from '../../Utilitys/Card';
import { CardContext } from './Context';

const CardProvider = ({children}) => {
    const [card,setCard] = useState([]);

    useEffect(()=>{
        const saveCard = getCard()
        setCard(saveCard)
    },[])

    return (
        <div>
            <CardContext.Provider value={{card,setCard}}>
                {children}
            </CardContext.Provider>
        </div>
    );
};

export default CardProvider;