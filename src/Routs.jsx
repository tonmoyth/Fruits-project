import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About/About";
import Card from "./Pages/Card/Card";
import Favorite from "./Pages/Favorite/Favorite";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement: <span className="loading loading-spinner text-success"></span>,
                loader: ()=> fetch('Meal.json'),
                Component: Home
            },
            {
                path:'/foodDetails/:id',
                loader: () => fetch('/Meal.json'),
                Component: FoodDetails
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/card',
                Component: Card
            },
            {
                path: '/favorite',
                Component: Favorite
            },
            
        ]
    },
    
])

export default Router;