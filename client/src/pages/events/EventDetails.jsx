import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteGroup, getAllGroups, getGroup } from "../../modules/groupManger";
import { getAllUserProfiles, me } from "../../modules/authManager";
import { BsThreeDots } from "react-icons/bs";
import Avatar from '../../assets/avatar.png'
import Event1 from '../../assets/KOI.png'
import { getAllEventList } from "../../modules/eventManager";


const GroupDetails = () => {
    const [user, setUser] = useState({});

    const [group, setGroup] = useState([]);

    const [filtComm, setFiltComm] = useState([]);

    const navigate = useNavigate();

    const getThisGroup = () => {
        getAllEventList().then(gp => setGroup(gp))
        getAllUserProfiles().then(usr => setUser(usr))
    }

    useEffect(() => {
        getThisGroup();
        me().then(setUser)
    }, []);

    const {eventId} = useParams();

  useEffect(
    () => {
      const newEvent = group.filter(list => {
        return list.id === parseInt(eventId)
      })
      setFiltComm(newEvent)
    },
    [group]
  )

  const deleteRequest = (e) => {
    e.preventDefault();
    deleteGroup(eventId)
        .then(() => navigate(`/groups`))
  };




    return (
        <>
          <section className="mt-20">
            <h2 className='text-[2.25rem]'>Event Details</h2>
                    <div className='p-4 border border-black flex flex-col lg:flex-row mx-10 md:mx-20 my-5 rounded-xl'>
                      <img src={Event1} alt="requested event" className='w-full lg:w-1/2 rounded-xl' />
                        {group.length > 0 ? (
                            filtComm.map((i) => {
                            return (
                                <>
                                <div className="mx-4 flex flex-col justify-between">
                                <div>
                                <h2 className='text-[1.5rem]'>{i.title}</h2>
                                </div>
                                <p>{i.location}</p>
                                <div className='flex justify-between'>
                                    <p className='font-semibold text-gray-500 '>time</p>
                                <Link
                                    to={`/groups/edit/${i.id}`}
                                >
                                    <div className='border border-black rounded-lg p-2 text-blue-600 flex justify-end items-end'>
                                        Edit
                                        <BsThreeDots />
                                    </div>
                                </Link>
                                <button
                                    className='border border-black rounded-lg p-2 text-red-600 flex justify-end items-end'
                                    onClick={(evt) => {deleteRequest(evt)}}
                                >
                                    Delete
                                <BsThreeDots />
                                </button>
                                </div>
                                </div>
                            </>
                            )
                            })
                        ): ""
                        }
                    </div>
          </section>
        </>
      )
    
    }

export default GroupDetails