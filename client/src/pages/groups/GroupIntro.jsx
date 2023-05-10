import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Nash from '../../assets/nashville.jpg'
import { useState } from 'react'
import { communityData } from '../../utils/data'



const GroupIntro = () => {

    const [currentState, setCurrentState] = useState(0);
    const navigate = useNavigate()

    return (
        <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex flex-col flex-1 text-center align-center justify-center gap-2'>
                <h2
                    className='font-extrabold text-blue-800 tracking-[.5em] text-[2.0rem] md:text-[2.5rem] lg:text-[2.6rem] text-center'
                >Groups</h2>
                <div className='mt-4 flex items-center justify-center'>
                    <button
                        className='w-2/3 md:w-1/2 lg:w-2/3 mb-2 border bg-gradient-to-br from-blue-400 to-blue-600 px-4 py-2 rounded-lg hover:shadow-lg transition ease-in-out duration-100 font-semibold text-white'
                        onClick={() => navigate('/about')}
                    >Find Out More</button>
                </div>
            </div>
        </section>
    )
}

export default GroupIntro