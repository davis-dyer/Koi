import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MdPublic, MdShoppingBasket } from 'react-icons/md'
import { BiLock, BiLockOpen } from 'react-icons/bi'
import NotFound from "../../assets/NotFound.svg";
import { Link } from 'react-router-dom'
import { BsUnlock } from 'react-icons/bs';
import { getAllUserProfiles } from '../../modules/authManager';


const Event = ({ flag, data, scrollValue }) => {

    const rowContainer = useRef();

    const [users, setUsers] = useState({})


    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    const getData = () => {
      getAllUserProfiles().then(data => setUsers(data));
    };
  
  
    useEffect(() => {
      getData()
    }, [])


    return (
        <div
            ref={rowContainer}
            className={`w-full flex lg:grid lg:grid-cols-3 items-center gap-3  my-8 scroll-smooth ${
                flag
                ? "overflow-x-scroll scrollbar"
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {data && data.length > 0 ? (
                data.map((item) => (
                    <Link to={`/events/${item.id}`}>
                    <div
                        key={item?.id}
                        className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                    >
                        <div className="w-full flex items-center justify-between">
                            <motion.div
                                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                                whileHover={{ scale: 1.2 }}
                            >
                                <img
                                    src={NotFound}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                            {item.userId === users.id ? (
                                <motion.div
                                whileTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                            >
                                <BsUnlock className="text-white" />
                            </motion.div>
                            ) : (
                                <motion.div
                                whileTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                            >
                                <BiLock className="text-white" />
                            </motion.div>
                            )
                            }
                        </div>

                        <div className="w-full flex flex-col items-end justify-end -mt-8">
                            <p className="text-textColor font-semibold text-base md:text-lg">
                                {item?.title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {item?.location}
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">{item?.eventDate}</p>
                            </div>
                        </div>
                    </div>
                  </Link>
                ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} className="h-340" />
                    <p className="text-xl text-headingColor font-semibold my-2">
                        Items Not Available
                    </p>
                </div>
            )}
        </div>
    )
}

export default Event