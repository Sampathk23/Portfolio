import React,{useState} from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typed from 'react-typed'
import Porfolio from '../assets/Portfolio-bg.jpg'

const Home = () => {
  const[nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
  return (
    <div style={{backgroundImage: `url(${Porfolio})`}} name='home' className='w-full h-screen bg-cover bg-center bg-no-repeat '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#66FCF1]'>Sampath Kumar</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a 
            <Typed className='pl-4' strings={['Front','Back']} typeSpeed={120} backSpeed={140} loop/>End Developer</h2>
            <p className='text-[#c5c6c7] max-w-[700px] py-4'>Welcome to my digital world! 🚀 A BBM grad turned tech enthusiast 🎓 | 
            From risk analyst to coding maestro 💻 | Crafting immersive web experiences 🌐 | A MERN Stack magician 🧙‍♂️ | 
            Embracing innovation & impacting lives ✨ | Let's code the future together! 🚀.</p>
                <div>
                <Link onClick={handleClick} to="project" smooth={true} duration={500} ><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Project
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button></Link>
                </div>
        </div>
    </div>
  )
}

export default Home