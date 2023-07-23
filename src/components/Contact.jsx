import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#010506] text-[#fff] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/ea48ae20-f517-45bb-8603-6c385d4fbecc" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>Submit the below form or shoot me an email - <a className='hover:text-pink-600' href="mailto:sampath.uae@outlook.com">sampath.uae@outlook.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2 text-black' type="text" name="name" placeholder='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" name="email" placeholder='Email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact