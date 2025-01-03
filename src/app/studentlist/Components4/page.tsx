"use client";
import { useState } from "react";
import Image from 'next/image'
import React from 'react'

const blog4 = () => {
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
    
   <main className="bg-blue-300">
        <div className=" bg-[#696969]">
      
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
      
      <div className='text-[60px] font-semibold flex justify-center text-center -ml-7 '><h1>Start Career Software Developer</h1></div>
    <div className='text-[30px] font-normal flex justify-center items-center'>Choose the best future platfoam to showcase your content</div>
   <Image src="/images/image6.png" alt="logo" width={800} height={800} className='flex justify-center mt-6 ml-[250px] items-center'/>
   <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>How to Start a Career as a Software Developer</h1>
   <p className='ml-[10%] text-1xl mt-3 '>The software development field is one of the fastest-growing and most rewarding careers in the modern world. If you’re passionate about technology  </p>
 <p className='ml-[10%] text-1xl mt-1 '>and problem solving, becoming a software developer might be the perfect path for you. Here is a step-by-step guide to help you start your journey:</p> 
 
<h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>1. Understand the Role of a Software Developer</h1>
<p className='ml-[10%] text-1xl mt-3'>Before diving into the field, it’s important to know what software developers do. They create, test, and maintain software applications that solve specific </p>
  <p className='ml-[10%] text-1xl mt-1'> pooblems or meet user needs. Developers often work in teams and collaborate with designers, product managers, and other stakeholders.</p> 
 
 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>2. Choose a Programming Language</h1>
 <p className='ml-[10%] text-1xl mt-3'>Start by picking one or two programming languages to focus on. Some of the most popular beginner-friendly languages are:</p>
<p className='ml-[10%] text-1xl mt-1'><b><i>Python:</i></b> Great for beginners and widely used in web development, data science, and AI.</p>
<p className='ml-[10%] text-1xl mt-1'><b><i>Javascript:</i></b>  Essential for web development.</p>
<p className='ml-[10%] text-1xl mt-1'><b><i>Java:</i></b>  Commonly used in enterprise applications and Android development</p>
  
  <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>3. Learn the Basics of Programming</h1>
<p className='ml-[10%] text-1xl mt-3'>To become a software developer, you need a solid understanding of fundamental programming concepts, such as:</p>
<p className='ml-[10%] text-1xl mt-1'>Variables and data types</p>
<p className='ml-[10%] text-1xl mt-1'>Control structures (if-else, loops)</p>
<p className='ml-[10%] text-1xl mt-1'>Functions and methods</p>
<p className='ml-[10%] text-1xl mt-1'>Object-oriented programming (OOP)</p>
<p className='ml-[10%] text-1xl mt-1'>You can learn these concepts through online platforms like Codecademy, freeCodeCamp, or YouTube tutorials.</p>
 


 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>4. Practice by Building Projects</h1>
 <p className='ml-[10%] text-1xl mt-3'>Theory is important, but practical experience is what truly matters. Start with small projects</p>
  <p className='ml-[10%] text-1xl mt-1'> like a calculator or a to-do app. Gradually move to more comple projects like e-commerce websites or mobile apps.</p>
 <p className='ml-[10%] text-1xl mt-1'>Building projects helps you:</p>
 <p className='ml-[10%] text-1xl mt-1'>Apply theoretical knowledge.</p>
 <p className='ml-[10%] text-1xl mt-1'>Gain hands-on experience.</p>
 <p className='ml-[10%] text-1xl mt-1'>Build a portfolio to showcase your skills.</p>

 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>5. Understand Development Tools and Frameworks</h1>
 <p className='ml-[10%] text-1xl mt-3'>Modern software development relies heavily on tools and frameworks. Familiarize yourself with</p>
 <p className='ml-[10%] text-1xl mt-1'>Modern software development relies heavily on tools and frameworks. Familiarize yourself with</p>
 <p className='ml-[10%] text-1xl mt-1'>Text Editors and IDEs: Use tools like VS Code, IntelliJ, or PyCharm.</p>
 <p className='ml-[10%] text-1xl mt-1'>Frameworks: Depending on your focus, learn frameworks like React, Django, or Spring Boot.</p>

 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>6. Participate in Online Communities</h1>
 <p className='ml-[10%] text-1xl mt-3'>Join communities to network with other developers and stay updated with the latest trends:</p>
 <p className='ml-[10%] text-1xl mt-1'>Stack Overflow: Ask questions and solve problems.</p>
 <p className='ml-[10%] text-1xl mt-1'>GitHub: Contribute to open-source projects.</p>
 <p className='ml-[10%] text-1xl mt-1'>Reddit: Participate in subreddits like r/learnprogramming.</p>

 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>7. Get Certified or Enroll in a Course</h1>
 <p className='ml-[10%] text-1xl mt-3'>While a formal degree isn’t always necessary, certifications and courses can boost your credibility. Platforms like Coursera</p>


 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>8. Prepare for Job Interviews</h1>
 <p className='ml-[10%] text-1xl mt-3'>Once you’ve honed your skills, start applying for jobs. Prepare for interviews by practicing:</p>
 <p className='ml-[10%] text-1xl mt-1'>Algorithm and data structure problems on platforms like LeetCode or HackerRank.</p>
 <p className='ml-[10%] text-1xl mt-1'>System design basics for senior roles</p>

 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>9. Never Stop Learning</h1>
 <p className='ml-[10%] text-1xl mt-3'>The tech field evolves rapidly. Stay updated by:</p>
 <p className='ml-[10%] text-1xl mt-1'>Reading blogs and books.</p>
 <p className='ml-[10%] text-1xl mt-1'>Watching tech tutorials on YouTube.</p>
 <p className='ml-[10%] text-1xl mt-1'>Following industry leaders on social media.</p>

 <h1 className='text-2xl flex justify-center items-center underline decoration-double mt-4 text-[#696969]'>Final Thoughts</h1>
 <p className='ml-[10%] text-1xl mt-3'>Starting a career as a software developer requires dedication and consistent effort. Focus on learning, practicing, and building a network in the tech community.</p> 
  <p className='ml-[10%] text-1xl mt-1'>With time and persistence, you’ll find yourself growing in this exciting field.</p>
<p className='ml-[10%] text-1xl mt-1'>Remember: Every expert was once a beginner. Start today, and  achieve success </p>
{/* <Image src="/images/image6.png" alt="logo" width={200} height={200} className='flex justify-center  -mt-[72%] ml-[750px] items-center'/> */}
  
  {/* comment section */}
  
  <div className="flex flex-col justify-between h-200 space-x-3 mt-12">
      <h1 className="text-4xl flex justify-center mt-12 text-[#696969]">Add Comments</h1>

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
          className="py-2 px-4 bg-[#696969] text-white rounded-md ml-2"
        >
          Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-12">
        <h2 className="text-2xl flex justify-center">Comments:</h2>
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

export default blog4