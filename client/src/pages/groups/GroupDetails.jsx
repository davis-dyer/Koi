import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllGroups, getGroup } from "../../modules/groupManger";
import { getAllUserProfiles, me } from "../../modules/authManager";
import { BsThreeDots } from "react-icons/bs";
import Avatar from '../../assets/avatar.png'
import Event1 from '../../assets/KOI.png'


const GroupDetails = () => {
    const [user, setUser] = useState({});

    const [group, setGroup] = useState([]);

    const [filtComm, setFiltComm] = useState([])

    const getThisGroup = () => {
        getAllGroups().then(gp => setGroup(gp))
        getAllUserProfiles().then(usr => setUser(usr))
    }

    useEffect(() => {
        getThisGroup();
        me().then(setUser)
    }, []);

    let {groupId} = useParams();

  useEffect(
    () => {
      const newEvent = group.filter(list => {
        return list.id === parseInt(groupId)
      })
      setFiltComm(newEvent)
    },
    [group]
  )




    return (
        <>
          <section className='m-4 mt-10'>
            <div className='flex lg:flex-row lg:justify-start lg:items-start flex-col justify-center items-center'>
              <img src={Avatar} alt="profile picture" className='lg:w-32 w-24' />

              {group.length > 0 ? (
                filtComm.map((i) => {
                  return (
                    <>
                      <div className='m-2 flex-col'>
                        <h2 className='text-[2.5rem] font-bold p-2'>{i.groupName}</h2>
                        <p>{i.groupDesc}</p>
                      </div>
                    </>
                  )
                })
              ): ""
              }
            </div>
          </section>
          <section className="mt-20">
            <h2 className='text-[2.25rem]'>Community Events</h2>
              {/* {
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
                            //onClick={() => {deleteRequest(evt.id)}}
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
              } */}
          </section>
        </>
      )
    
    }

export default GroupDetails