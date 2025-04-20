import React from 'react';
import { Link } from 'react-router';
import MultipleButton from '../../components/Button/MultipleButton';

const SingleCard = ({meal}) => {
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
                </div>
        </div>
    );
};

export default SingleCard;