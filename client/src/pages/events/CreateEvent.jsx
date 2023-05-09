import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventList from './EventList'
import { addEvent } from '../../modules/eventManager'
import { getAllCategories } from '../../modules/categoryManager'
import { getAllGroups } from '../../modules/groupManger'
import { me } from '../../modules/authManager'


const CreateEvent = () => {


    //const datetime = new Date()
    
    //timestamp: datetime.toDateString()

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const emptyEvent = {
        title: '',
        desc: '',
        location: '',
        eventDate: '',
        categoryId: 1,
        groupId: 1
    };

    const [event, setEvent] = useState(emptyEvent);

    const [title, setTitle] = useState();
    const [categoryId, setCategoryId] = useState();
    const [groupId, setGroupId] = useState();
    const [eventDate, setEventDate] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const [categories, setCategories] = useState([]);
    const [groups, setGroups] = useState([]);


    
    const getData = () => {
        getAllCategories().then(data => setCategories(data));
        getAllGroups().then(data => setGroups(data));
        
    };

    useEffect(() => {
        me().then(setUser)
    }, [])

    useEffect(() => {
        getData()
    }, [])


    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
        const eventCopy = { ...event };
        eventCopy[key] = value;
        setEvent(eventCopy);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addEvent(event).then(() => {
            navigate(`/events`);
        });
    };
    
    /* const submitPost = (e) => {
        e.preventDefault();
              const event = {
                title,
                location,
                eventDate,
                description,
                categoryId,
                groupId
              }
    
        addEvent(event).then((eventData) => {navigate(`/event/${eventData.id}`)});
    }; */




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
                                <input type="text" id='title' name='title' value={event.title} placeholder='ex. Prayer Night' onChange={handleInputChange} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="description">Event Description</label>
                                <textarea type="text" id='description' name='description' value={event.desc} rows={3} cols={3} placeholder='Join us as we gather...' onChange={handleInputChange} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="location">Event Location</label>
                                <textarea type="location" id='location' name='location' value={event.location} placeholder='The Well' onChange={handleInputChange} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="eventDate">Event Date</label>
                                <input type="date" id='eventDate' name='eventDate' value={event.eventDate}  onChange={handleInputChange} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="categoryId" className="category">Category</label>
                                <select
                                    id='category'
                                    onClick={(e) => {
                                        handleInputChange(e)
                                    }}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    {categories.map((category) => <option value={category.id} key={`addpostcategory--${category.id}`} name={category.type}>{category.type}</option>)}
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="groupId" className="group">Group</label>
                                <select
                                    id='group'
                                    onClick={(e) => {
                                        handleInputChange(e)
                                    }}
                                    className='border border-gray-400 py-1 px-2 w-full' required
                                >
                                    {groups.map((j) => <option value={j.id} key={`addgroupId--${j.id}`} name={j.groupName}>{j.groupName}</option>)}
                                </select>
                            </fieldset>
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    onClick={handleSubmit}
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