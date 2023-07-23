import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Express from '../assets/expressjs.png'
import Github from '../assets/github.png'
import Java from '../assets/java.png'
import SQL from '../assets/SQL.png'
import Postman from '../assets/postman logo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#010506] text-[#fff] flex '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 mt-2 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-500'>Skills</p>
                <p className='pt-2 sm:py-4 text-sm sm:text-base'>These are the technologies I've learnt</p>
            </div>
            <div className='w-full grid grid-cols-4 pt-2 sm:pt-0  sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>HTML</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={CSS} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>CSS</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={JS} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Java Script</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Github} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>GitHub</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={ReactImg} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>React JS</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Node} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Node JS</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Express} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Express JS</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Mongo} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Mongo DB</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Java} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Core Java</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={SQL} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>SQL</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Tailwind} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Tailwind CSS</p>
                </div>
                <div className='shadow-lg shadow-[#66FCF1] hover:scale-110 duration-500 h-28 sm:h-auto'>
                    <img className='w-16 sm:w-20 mx-auto' src={Postman} alt="css icon" />
                    <p className='my-2 sm:my-4 text-sm sm:text-base'>Postman</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills