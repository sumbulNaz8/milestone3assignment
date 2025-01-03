"use client";
import { useState } from "react";
import Image from "next/image"
import React from 'react'

const blog3 = () => {

     // State to manage comments
       const [comments, setComments] = useState([]); // Array for storing comments
       const [newComment, setNewComment] = useState(""); // Input for new comment
     
       const handleAddComment = () => {
         if (newComment.trim() !== "") {
           setComments([...comments, newComment]); // Add new comment
           setNewComment(""); // Clear input field
         }
     };
  return (
     

     // Navebar section
    <main className="bg-blue-500">
        <div className=" bg-black">
      
            <nav className="flex items-center justify-between " >
               
          
              <div className=" flex space-x-[62px] ">
             
             
              <li className="text-2xl  text-white flex justify-center  mr-[310px] ml-8 "> Publication:26 December 2024</li>
              
              <li className="text-2xl  text-white flex justify-center   "> Home</li>
              <li className="text-2xl  text-white flex justify-center  items-center   ">About</li>
              <li className="text-2xl  text-white flex justify-center   "> Contact</li>
              <li className="text-2xl  text-white flex justify-center   "> Categories</li>
              </div>
              </nav>
            </div>
      <div >
<div className="ml-[35%] mt-12">

          <Image src="/images/logo12.png" alt="logo" width={400} height={200} />
</div>
     <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-12 ' >Software Engineer: Shaping the Digital Future</h1>
      <p className='ml-[10%] text-1xl mt-4 text-white'>In today’s fast-paced digital world, software engineers play a pivotal role in shaping how technology influences our daily lives. From creating</p> 
        <p className='ml-[10%] text-1xl mt-1 text-white'>mobile apps to designing complex systems that run enterprises, software engineers are the architects behind the technology we rely on.</p>
      <p  className='ml-[10%]  mt-1 text-white'>In today’s fast-paced digital world, software engineers play a pivotal role in shaping how technology influences our daily lives. From creating </p>
        <p className='ml-[10%]  mt-1 text-white'>mobile apps to designing complex systems that run enterprises, software engineers are the architects behind the technology we rely on.</p>
       </div>

       <div>
       <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text'>What is a Software Engineer?</h1>
       <p className='ml-[10%] text-1xl mt-4 text-white'>A software engineer is a professional who applies engineering principles to design, develop, test, and maintain software systems. They use  </p>
  <p className='ml-[10%] text-1xl mt-1 text-white'>  programming languages, algorithms, and problem-solving skills to build applications and platforms that are efficient, reliable, and user-friendly.</p>
       </div>



       
<div>
<h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4'>Key Responsibilities</h1>
<p className='ml-[10%] text-1xl mt-4 text-white'>Problem-Solving: Analyzing and addressing user needs with innovative solutions.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Development: Writing clean, efficient, and scalable code in languages like Python, Java, or JavaScript.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Testing: Ensuring software functions correctly through debugging and quality assurance.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Maintenance: Updating software to meet evolving user requirements and fix issues.</p>
</div>

      
      <div>
   <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4'>   Skills Required</h1>
<p className='ml-[10%] text-1xl mt-4 text-white'>To excel as a software engineer, one needs a mix of technical and soft skills:</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Programming: Proficiency in multiple coding languages.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Critical Thinking: Ability to solve complex problems logically.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Collaboration: Working in teams to achieve common goals.</p>
<p className='ml-[10%] text-1xl mt-1 text-white'>Adaptability: Staying updated with the latest technologies and trends.</p>
      </div>



{/* comment section        */}

<div className=" w-[200px]  h-[200px]  rounded-none overflow-hidden shadow-lg -mt-[32%] ml-[82%]  px-2">
<Image src="/images/first.png"   objectFit="contain" width={430} height={50} alt="image"  /></div>

<div className=" w-[200px]  h-[200px]  rounded-none overflow-hidden shadow-lg -mt-[1%] ml-[82%]  px-2">
<Image src="/images/first.png"   objectFit="contain" width={430} height={50} alt="image"  /></div>

<div className="flex flex-col justify-between h-200 space-x-3 mt-12">
      <h1 className="text-4xl flex justify-center mt-12 underline decoration-double">Add Comments</h1>

      {/* Input Field */}
      <div className="flex justify-center mt-12">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="border px-4 py-2 rounded-md"
        />
        <button
          onClick={handleAddComment}
          className="py-2 px-4 bg-black text-white rounded-md ml-2 "> Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-12">
        <h2 className="text-2xl flex justify-center underline decoration-double">Comments:</h2>
        <div className="flex flex-col items-center mt-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <p key={index} className="text-xl border-b p-2 w-1/2 text-center">
                {comment}
              </p>
            ))
          ) : (
            <p className="text-xl">No comments yet. Add your first comment!</p>
          )}
        </div>
      </div>
    </div>
  


    </main>
  )
}

export default blog3
