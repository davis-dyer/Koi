import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { BsFilterCircle } from 'react-icons/bs'
import {MdChevronLeft} from 'react-icons/md'
import {MdChevronRight} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import GroupCard from './GroupCard'
import CreateGroup from './CreateGroup'
import { getAllGroups } from '../../modules/groupManger'

const GroupEventList = () => {

  const navigate = useNavigate()

  const [communities, setCommunities] = useState([])
  const [location, setEventLocation] = useState([])
  const [filteredCommunities, setFiltered] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [scrollValue, setScrollValue] = useState(0);

  const [groups, setGroups] = useState([])


  useEffect(() => {}, [scrollValue])

  const getData = () => {
    getAllGroups().then(data => setGroups(data));
    
};


useEffect(() => {
    getData()
}, [])





  return (
    <>
      <section className='mt-10 flex flex-col'>
        <motion.div className="w-full h-full flex items-center justify-between my-6">
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100'>
            Group List
          </p>
        </motion.div>
      </section>
      
      <section>
        <div className='flex justify-between'>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='w-full my-6'>
        <GroupCard
          scrollValue={scrollValue}
          flag={true}
          data={groups}
        />
      </section>

    </>
  )
}

export default GroupEventList