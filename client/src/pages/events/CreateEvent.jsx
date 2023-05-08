import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventList from './EventList'
import { addEvent } from '../../modules/eventManager'
import { getAllCategories } from '../../modules/categoryManager'

const CreateEvent = () => {


    //const datetime = new Date()
    
    //timestamp: datetime.toDateString()

    const navigate = useNavigate()
    const [title, setTitle] = useState();
    const [categoryId, setCategoryId] = useState();
    const [eventDate, setEventDate] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => setCategories(data.categories))
    }, [])
    
    const submitPost = (e) => {
        e.preventDefault();
              const event = {
                title,
                location,
                eventDate,
                description,
                categoryId,
              }
    
        addEvent(event).then((eventData) => {navigate(`/event/${eventData.id}`)});
    };




    return (
        <div className='min-h-screen py-20'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-purple-900 p-12">
                        <h2 className='text-white text-3xl mb-3'>Create an Event</h2>
                        <div>
                            <p className='text-white'>What event would you like to create?</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className='text-3xl mb-4'>Event</h2>
                        <p className="mb-4">Enter the details below</p>
                        <form className="">
                            <fieldset className="mt-5">
                                <label htmlFor="title">Event Title</label>
                                <input type="text" id='title' name='title' placeholder='ex. Prayer Night' onChange={(e) => setTitle(e.target.value)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="description">Event Description</label>
                                <textarea type="text" id='description' name='description' rows={3} cols={3} placeholder='Join us as we gather...' onChange={(e) => setDescription(e.target.value)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="location">Event Location</label>
                                <textarea type="location" id='location' name='location' placeholder='The Well' onChange={(e) => setLocation(e.target.value)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="eventDate">Event Date</label>
                                <input type="date" id='eventDate' name='eventDate'  onChange={(e) => setEventDate(e.target.value)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            {/* <fieldset className='mt-5'>
                                <label htmlFor="categoryId" className="category">Category</label>
                                <select
                                    id='category'
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    {categories.map((category) => <option value={category.id} key={`addpostcategory--${category.id}`}>{category.Type}</option>)}
                                </select>
                            </fieldset> */}
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    onClick={submitPost}
                                >Create Request</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEvent