import React, { useEffect, useState } from 'react'
import Avatar from '../assets/avatar.png'
import {BsThreeDots} from 'react-icons/bs'
import Event1 from '../assets/request-event.jpg'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {

  const [profile, setUserProfile] = useState({
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      password: "",
      isUser: null,
      id: 0
  })

  const [user, setUserInfo] = useState([])
  const [requests, setUserRequest] = useState([])
  const [location, setEventLocation] = useState([])
  const [userFiltered, setUserFiltered] = useState([])
  const [statusMsg, setStatusMsg] = useState("")

  const localAllmanosUser = localStorage.getItem('allmanos_user')
  const allmanosUserObject = JSON.parse(localAllmanosUser)
  const navigate = useNavigate()


  useEffect(
    () => {
      fetch(`http://localhost:8088/users?id=${allmanosUserObject.id}`)
        .then(res => res.json())
        .then(
            (userData) => {
              setUserInfo(userData)
            }
        )
    },
    []
  )



  useEffect(
    () => {
      fetch(`http://localhost:8088/event`)
        .then(res => res.json())
        .then(
            (userData) => {
              setUserRequest(userData)
            }
        )
    },
    []
  )

  useEffect(
    () => {
      fetch(`http://localhost:8088/location`)
        .then(res => res.json())
        .then(
            (userData) => {
              setEventLocation(userData)
            }
        )
    },
    []
  )

  useEffect(
    () => {
      getEvents()
    },
    [requests]
  )

  const getEvents = () => {
    fetch(`http://localhost:8088/event?requesterId=${allmanosUserObject.id}`)
        .then(res => res.json())
        .then(
            (userData) => {
              setUserFiltered(userData)
            }
        )
  }


  const deleteRequest = (id) => {
    return fetch(`http://localhost:8088/event/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(
        () => {
          setStatusMsg('Delete successful');
          getEvents()
        }
      )
  }
  



  return (
    <>
      <section className='m-4 mt-10'>
        <div className='flex lg:flex-row lg:justify-start lg:items-start flex-col justify-center items-center'>
          <img src={Avatar} alt="profile picture" className='lg:w-32 w-24' />
          {
            user.map(person => {
              return (
                <>
                  <div className='m-2 flex-col'>
                    <h2 className='text-[2.5rem] font-bold p-2'>{person.firstName} {person.lastName}</h2>
                    <p>Zip Code: {person.zipCode}</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
      <section className="mt-20">
        <h2 className='text-[2.25rem]'>Service Requested</h2>
          {
            userFiltered.map(evt => {
              return (
              <>
                <div className='p-4 border border-black flex flex-col lg:flex-row mx-10 md:mx-20 my-5 rounded-xl'>
                  <img src={Event1} alt="requested event" className='w-full lg:w-1/2 rounded-xl' />
                  <div className="mx-4 flex flex-col justify-between">
                    <div>
                      <h2 className='text-[1.5rem]'>{evt.title}</h2>
                    </div>
                    <p>{evt.desc}</p>
                    <div className='flex justify-between'>
                      <p className='font-semibold text-gray-500 '>{evt.timestamp}</p>
                      <button
                        className='border border-black rounded-lg p-2 text-red-600 flex justify-end items-end'
                        onClick={() => {deleteRequest(evt.id)}}
                        >
                        Delete
                        <BsThreeDots />
                      </button>
                      </div>
                    </div>
                </div>
              </>
              )
            })
          }
      </section>
    </>
  )

}

export default Profile