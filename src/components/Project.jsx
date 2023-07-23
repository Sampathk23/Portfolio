import React from 'react'
import FinanceData from '../assets/Project-DF.jpg'
import Task from '../assets/task-mngr.png'
import Blog from '../assets/blog-site.png'
const Project = () => {
  return (
    <div name='project' className='w-full bg-[#010506] text-[#fff] flex'>
        <div className='max-w-[1000px] mx-auto p-4 mt-10 flex flex-col justify-center h-full w-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
            <p className='py-6'>Check out some of my recent projects</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid item */}
                <div style={{backgroundImage: `url(${FinanceData})`}} 
                className='shadow-lg shadow-[#66FCF1] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider flex text-center'>
React JS, Tailwind CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Sampathk23/Data-Finance" target='blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                {/*  */}

                <div style={{backgroundImage: `url(${Task})`}} 
                className='shadow-lg shadow-[#66FCF1] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider flex text-center'>
Node, Express JS, MongoDB,Express-handlebars Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Sampathk23/Task-Manager" target='blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                {/*  */}

                <div style={{backgroundImage: `url(${Blog})`}} 
                className='shadow-lg shadow-[#66FCF1] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider flex text-center'>
 Node, Express JS, MongoDB,EJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/Sampathk23/Blog" target='blank'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    </div>
  )
}

export default Project