import React from 'react'

const GroupInfo = () => {
    return (
        <div className="flex flex-col relative mt-10 mb-10">
            <section className='mb-10'>
                <h2 className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:round-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100'>
                    What are Groups Event?
                </h2>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <article className='bg-slate-700 p-8 max-width-40 border rounded-lg shadow-2xl'>
                    <h2 className='mb-2 text-[1.5rem] text-yellow-200 text-bold'>The Problem</h2>
                    <p className='text-white'>
                        You and I need to solve an isolation issue...
                        <br></br>
                        <br></br>
                        We live in a world where technology is advancing by the second. One facet of that change is enhanced communication. Across various platforms, we have never been more connected with the people in our lives.
                        <br />
                        <br />
                        Although, at the same time, it feels like humans have never been more disconnected. Technology likes to promise solutions that make real life more effortless. Many people have found the opposite true and would agree that technology has complicated our lives. Because of the endless distractions, reality continues to be confusing and complicated. Thus, many people have turned to isolation from the world around them.
                    </p>
                </article>
                <article className='bg-slate-200 p-8 max-width-40 border rounded-lg shadow-2xl'>
                    <h2 className='mb-2 text-[1.5rem] text-green-700'>The Solution</h2>
                    <p className='text-headingColor'>
                        Community events will be a chance for my audience members to meet in person and... well... be together.
                        <br></br>
                        <br></br>
                        We don't need more Netflix; we don't need more TV; we don't need more 2 hour TikTok traps; we don't need more Instagram reels; we don't need more Twitter theories; we don't need more SCREENS.
                        <br></br>
                        <br></br>
                        We need more personal connections that bring us back to reality.
                        <br></br>
                        <br></br>
                        Whether that's meeting for coffee... beers after work... park days for some sunshine... or anything in between, my audience is encouraged to create events that bring community together.
                    </p>
                </article>

            </section>
        </div>
    )
}

export default GroupInfo