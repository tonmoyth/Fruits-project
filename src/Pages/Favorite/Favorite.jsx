import React, { useEffect, useState } from 'react';
import { getFavorite, removeFavorite } from '../../Utilitys/Favorite/Favorite';
import SingleCard from '../SingleCard/SingleCard';
import Empty from '../Emty/Empty';

const Favorite = () => {
    const [favorites,setFavorites] = useState([]);

    useEffect(()=>{
        setFavorites(getFavorite())
    },[])

    
    const removeFav = (id) => {
        removeFavorite(id)
        setFavorites(getFavorite())
    }

    if(favorites.length < 1){
        return <Empty></Empty>
    }
    
    return (
        <div className='my-4 md:w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6'>
            {
                favorites.map(favorite => <SingleCard
                    meal={favorite}
                    key={favorite.idCategory}
                    deleted={true}
                    removeFav={removeFav}
                    ></SingleCard>)
            }
        </div>
        </div>
    );
};

export default Favorite;