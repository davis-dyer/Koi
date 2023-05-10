import React, { useEffect, useRef, useState } from 'react'
//import { motion } from 'framer-motion';
import NotFound from "../../assets/NotFound.svg";
import { Link } from 'react-router-dom'
import conflict from '../../assets/conflict.png'
import dyernotes from '../../assets/dyernotes.png'
import metaverse from '../../assets/metaverse.png'
import N2F from '../../assets/note2faith.png'




const PostCard = () => {

    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <div className='grid grid-cols-3 gap-10 md:grid-cols-6 lg:grid-cols-10 grid-flow-row-dense'>


                    <div className='h-32 w-32 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-xl hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-32 w-32'>
                            <img className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={N2F} alt="" />
                        </div>
                    </div>



                    <div className='h-32 w-32 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg  hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-32 w-32 md:w-full lg:h-96 lg:w-72'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={dyernotes} alt="" />
                        </div>
                    </div>


                    <div className='h-32 w-32 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-32 w-32'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={conflict} alt="" />
                        </div>
                    </div>


                    <div className='h-32 w-32 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-32 w-32'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={metaverse} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PostCard