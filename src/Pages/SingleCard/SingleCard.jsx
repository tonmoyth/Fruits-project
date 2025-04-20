import React from 'react';
import { Link } from 'react-router';
import MultipleButton from '../../components/Button/MultipleButton';
import { TiDelete } from "react-icons/ti";
import { getFavorite, removeFavorite } from '../../Utilitys/Favorite/Favorite';
import Emty from '../Emty/Emty';

const SingleCard = ({meal,deleted,setFavorites}) => {
    const {strCategory,strCategoryThumb,idCategory} = meal;

    const removeFav = () => {
        removeFavorite(idCategory)
        setFavorites(getFavorite())
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    src={strCategoryThumb}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <div className="card-actions justify-end">
                    <Link to={`/foodDetails/${idCategory}`}>
                        <MultipleButton label='Details'></MultipleButton>
                    </Link>
                    </div>
                </div>
               {deleted &&  <div onClick={removeFav} className='absolute -top-3 -right-2 p-1 group hover:bg-gray-900 bg-gray-300 rounded-full'><TiDelete className='group-hover:text-white' size={25}/></div>}
                </div>
        </div>
    );
};

export default SingleCard;