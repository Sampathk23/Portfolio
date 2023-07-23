import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Logo from '../assets/logo.png'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const openPdf = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/SAMPATH KUMAR cv.pdf';
        window.open(pdfUrl, '_blank');
      };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#0b0C10] '>
        <div className='max-w-[1200px] h-[50px] mx-auto w-full flex justify-between items-center rounded-full px-5  bg-[#66FCF180]'>
        <div>
            <img className='w-14' src={Logo} alt="logo" />
        </div>
        {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-black hover:bg-[#ccd6f6] rounded-2xl'><Link to="home" smooth={true} duration={500} >Home</Link></li>
                <li className='hover:text-black hover:bg-[#ccd6f6] rounded-2xl'><Link to="about" smooth={true} duration={500} >About</Link></li>
                <li className='hover:text-black hover:bg-[#ccd6f6] rounded-2xl'><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li className='hover:text-black hover:bg-[#ccd6f6] rounded-2xl'><Link to="project" smooth={true} duration={500} >Project</Link></li>
                <li className='hover:text-black hover:bg-[#ccd6f6] rounded-2xl'><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#66FCF1] text-[#0b0C10]'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="project" smooth={true} duration={500} >Project</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
        </ul>
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul >
                <li className='w-[160px] h-[60px] bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
                    <a className='flex justify-between items-center w-full text-gray-300' target='blank'  href="https://www.linkedin.com/in/sampath-kumar-6a9a9411a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY3jnBh56ToCtv4GItDA5Jg%3D%3D">Linkedin <FaLinkedin size={30}/> </a></li>
                <li className='w-[160px] h-[60px] bg-[#333333] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between w-full text-gray-300' target='blank' href="https://github.com/Sampathk23">GitHub <FaGithub size={30}/></a></li>
                <li className='w-[160px] h-[60px] bg-[#6fc2b0] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between w-full text-gray-300' href="mailto:sampath.uae@outlook.com">Email <HiOutlineMail size={30}/></a></li>
                <li className='w-[160px] h-[60px] bg-[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between w-full text-gray-300' onClick={openPdf} href="/">Resume <BsFillPersonLinesFill  size={30}/></a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar