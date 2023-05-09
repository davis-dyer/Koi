import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllCategories } from '../../modules/categoryManager'
import { editGroup } from '../../modules/groupManger'
import { me } from '../../modules/authManager'

const GroupEditForm = () => {

    //const datetime = new Date()

    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const [group, setGroup] = useState({
        
            id: 0,
            groupName: '',
            groupDesc: '',
            categoryId: 1,      
    })


    const [categories, setCategories] = useState([]);
    
    const getData = () => {
        getAllCategories().then(data => setCategories(data));
        
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
        const eventCopy = { ...group };
        eventCopy[key] = value;
        setGroup(eventCopy);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        editGroup(group).then(() => {
            navigate(`/groups`);
        });
    };


    


    return (
        <div className='min-h-screen py-20'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 bg-white rounded-xl mx-auto showdow-lg overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-purple-900 p-12">
                        <h2 className='text-white text-3xl mb-3'>Register Your Group</h2>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className='text-3xl mb-4'>New Group</h2>
                        <p className="mb-4">Enter the details below</p>
                        <form className="">
                            <fieldset className="mt-5">
                                <label htmlFor="">Group Name</label>
                                <input type="text" name="groupName" id='groupName' value={group.groupName} 
                                placeholder='First Baptist Volunteers' onChange={(e) => handleInputChange(e)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <label htmlFor="">Group Description</label>
                                <textarea id='groupDesc' type="text" name='groupDesc' value={group.groupDesc} rows={3} cols={3} placeholder='We are members of First Baptist and here to help...' onChange={(e) => handleInputChange(e)} className='border border-gray-400 py-1 px-2 w-full' required />
                            </fieldset>
                            <fieldset className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full bg-purple-500 py-3 text-center text-white'
                                    onClick={handleSubmit}
                                >Edit Your Group</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupEditForm 