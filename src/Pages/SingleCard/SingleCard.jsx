import React from 'react';
import { Link } from 'react-router';
import MultipleButton from '../../components/Button/MultipleButton';
import { TiDelete } from "react-icons/ti";


const SingleCard = ({meal,deleted,removeFav}) => {
    const {strCategory,strCategoryThumb,idCategory} = meal;

    
    
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
               {deleted &&  <div onClick={() => removeFav(idCategory)} className='absolute -top-3 -right-2 p-1 group hover:bg-gray-900 bg-gray-300 rounded-full'><TiDelete className='group-hover:text-white' size={25}/></div>}
                </div>
        </div>
    );
};

export default SingleCard;