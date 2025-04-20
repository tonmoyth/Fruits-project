import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";
import MultipleButton from '../../components/Button/MultipleButton';
import { FaBookmark } from "react-icons/fa";

const FoodDetails = () => {
    const mealData = useLoaderData();
    const {id} = useParams();
    const detailsFood = mealData.find(food => food.idCategory === id);
    
    const {strCategory,strCategoryDescription,strCategoryThumb} = detailsFood;

    
    return (
        <div className='md:w-11/12 mx-auto my-4'>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                    <img
                        src={strCategoryThumb}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        {strCategory}
                    </h5>
                    <p className="mb-5 text-gray-800">
                        {strCategoryDescription}
                    </p>
                    <div className="flex items-center">
                        
                        <MultipleButton label={<FaCartShopping size={20}/>}></MultipleButton>
                        <MultipleButton label={<FaBookmark size={20}/>}></MultipleButton>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default FoodDetails;