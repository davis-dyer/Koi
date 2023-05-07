import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/KOI.png'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.png'
import { FaSignInAlt } from 'react-icons/fa'
//import { useStateValue } from '../context/StateProvider'
import { CgProfile } from 'react-icons/cg'
//import { actionType } from '../context/reducer'
import { MdLogout } from 'react-icons/md'

const Footer = () => {




    return (
        <footer className="fixed z-50 w-screen p-3 md:p-4 md:px-12 bg-blue-100">
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={Logo} alt="Logo" className='w-20 object-cover' />
                </Link>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'
                    >
                        <Link to={'/posts'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Posts</li>
                        </Link>
                        <Link to={'/podcast'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Podcast</li>
                        </Link>
                        <Link to={'/community'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Community</li>
                        </Link>
                        <Link to={'/about'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>About</li>
                        </Link>
                        <Link to={'/contact'} className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            <li>Contact</li>
                        </Link>
                    </motion.ul>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full">

            </div>

        </footer>
    )
}

export default Footer