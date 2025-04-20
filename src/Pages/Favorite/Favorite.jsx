import React, { useEffect, useState } from 'react';
import { getFavorite } from '../../Utilitys/Favorite/Favorite';
import SingleCard from '../SingleCard/SingleCard';

const Favorite = () => {
    const [favorites,setFavorites] = useState([]);
    useEffect(()=>{
        setFavorites(getFavorite())
    },[])

    
    
    return (
        <div className='my-4 md:w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6'>
            {
                favorites.map(favorite => <SingleCard
                    meal={favorite}
                    key={favorite.idCategory}
                    deleted={true}
                    setFavorites={setFavorites}
                    favorites={favorites}
                    ></SingleCard>)
            }
        </div>
        </div>
    );
};

export default Favorite;