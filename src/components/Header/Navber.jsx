import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import MultipleButton from '../Button/MultipleButton';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:w-11/12 mx-auto md:mt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/'>Home</NavLink>
                        </li>
                       
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/card'><FaCartShopping /></NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/favorite'><FaBookmark /></NavLink>
                        </li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Fruits</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                            <NavLink 
                            className={({isActive})=> 
                            isActive && 'text-green-500'
                            } to='/'>
                                Home</NavLink>
                        </li>
                       
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/card'><FaCartShopping size={20}/></NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive})=> 
                                isActive && 'text-green-500'
                                } 
                            to='/favorite'><FaBookmark size={20}/></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>
                    <MultipleButton label='Sign Up'></MultipleButton>
                    </Link>
                </div>
                </div>
        </div>
    );
};

export default Navber;