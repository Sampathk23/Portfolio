import React from 'react'
import AboutB from '../assets/about-macro.jpg'

const About = () => {
  return (
    <div name='about' style={{backgroundImage: `url(${AboutB})`}} className='w-full h-screen bg-[#010506] text-[#fff] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8 pt-[30%] sm:pt-0 '>
                <div className='pl-4 pb-8'>
                    <p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>About </p>
                </div>
            </div>
            <div></div>
            <div className='h-[90%] sm:max-w-[1200px] sm:h-auto w-full gap-8 px-4'>
                {/* <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi! I'm Sampath, nice to meet you. Please take a look around.</p>
                </div> */}
                <div className=' text-xs sm:text-base sm:h-auto text-justify' >
                    <p className='text-sm sm:text-2xl flex gap-2 pb-1'>Hello there! My name is <p className='font-bold text-[#66FCF1]'>Sampath Kumar</p></p>
                    <p>Welcome to my portfolio! I am a highly motivated BBM graduate with a passion for technology and a diverse career journey. From my early days as an insurance underwriter to excelling as an accounts assistant and procurement assistant in Dubai, my professional experiences have shaped me into a versatile individual.</p>
                    <p className='py-1'>As I sought new challenges, I decided to embark on a transformative journey into the world of software development. Enrolling in courses covering the MERN Stack, Web Tech, Core Java, and SQL at JSPIDER, I honed my skills and embraced my true calling as a software developer.</p>
                    <p>I believe in pushing the boundaries of what's possible through innovation and creativity. My curiosity and dedication drive me to explore new technologies, problem-solving strategies, and emerging trends to craft efficient and user-centric software solutions.</p>
                    <p className='py-1'>In this portfolio, you will find projects that showcase my expertise in building modern web applications using React and Tailwind CSS. Each project reflects my commitment to delivering seamless user experiences and elegant designs.</p>
                    <p>Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoyed creating it. If you have any questions or collaboration opportunities, feel free to reach out. Let's connect and build something amazing together!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About