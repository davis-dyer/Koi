import React, { useState } from 'react'
import { motion } from 'framer-motion'
//import Background from '../assets/background.jpg'
//import { Authorized } from '../views/Authorized'
import { Link, useNavigate } from 'react-router-dom'
import N2F from '../assets/note2faith.png'
//import junto from '../assets/junto-letter.png'
import conflict from '../assets/conflict.png'
import nostalgia from '../assets/Present.png'
import dyernotes from '../assets/dyernotes.png'
import metaverse from '../assets/metaverse.png'


const HomeContainer = () => {


    return (
        <>
            <div className='flex min-h-screen items-center justify-center mt-10'>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense'>


                    <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-xl md:col-span-2 lg:col-span-3 hover:shadow-xl hover:shadow-black/30'>
                        <div className='aspect-w-3 aspect-h-3 lg:w-full lg:aspect-h-1'>
                            <img className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={N2F} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                            <h1 className="font-dmserif text-3xl font-bold text-white -mb-1 md:mb-4 lg:mb-10">Jesus</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A note to my faith in Jesus Christ</p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>



                    <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg md:col-span-2 lg:col-span-1 hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-96 w-72 md:w-full lg:h-96 lg:w-72'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={dyernotes} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                            <h1 className="font-dmserif text-3xl font-bold text-white">Podcast</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A note to my faith in Jesus Christ</p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>


                    <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-96 w-72'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={conflict} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                            <h1 className="font-dmserif text-3xl font-bold text-white">Life</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A note to my faith in Jesus Christ</p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>


                    <div className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-lg drop-shadow-lg hover:shadow-xl hover:shadow-black/30'>
                        <div className='h-96 w-72'>
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={metaverse} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
                            <h1 className="font-dmserif text-3xl font-bold text-white">Tech</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A note to my faith in Jesus Christ</p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default HomeContainer