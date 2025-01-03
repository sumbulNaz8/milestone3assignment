"use client";
import { useState } from "react";
import Image from "next/image"



const blog1 = () => {

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
    
    <main >
      <div className=" bg-green-900">

      <nav className="flex items-center justify-between " >
    <Image src="/images/first.png"   layout="intrinsic"  objectFit="contain"width={100} height={10} alt="Imageee"   />
        <div className=" flex space-x-8 mr-4" >
       
       
        <li className="text-2xl  text-green-500 flex justify-center  mr-[310px] "> Publication:26 December 2024</li>
        <li className="text-2xl  text-green-500 flex justify-center   "> Home</li>
        <li className="text-2xl  text-green-500 flex justify-center  items-center   ">About</li>
        <li className="text-2xl  text-green-500 flex justify-center   "> Contact</li>
        <li className="text-2xl  text-green-500 flex justify-center   "> Categories</li>
        </div>
        </nav>
      </div>
<div >

    {/* // image */}
   
    <Image src="/images/imag4.png"   layout="intrinsic" 
    
    objectFit="contain"
    width={600} height={50} alt="Image"   />
    
    

{/* introduction */}

<div>
<h1 className="text-4xl text-blue-500 underline  font-semibold flex justify-around -mt-[30%]  hover:text-green-600">Introduction </h1>
{/* <h1 className="text-4xl text-blue-500 underline  font-semibold flex justify-around -mt-[30%]  hover:text-green-600">Introduction </h1> */}
<p className="text-center -mr-40 top-20 mt-8 font-serif font-bold"><b><i>Kamran Tessori</i></b>, a prominent Pakistani businessman turned politician, has made his mark in both </p> 
<p className="text-center -mr-40 top-20 font-serif font-bold"> the gold industry and the political arena. Known for his entrepreneurial success and political endeavors, </p>
<p className="text-center -mr-40 top-20 font-serif font-bold">he is currently serving as the Governor of Sindh, a position he assumed in October 2022.</p>
</div>

{/* Early life and background */}
<div >
<h1 className="text-4xl text-blue-500  underline  font-semibold flex justify-around  mt-9  hover:text-green-600">Early Life and Background </h1>
<p className="text-center -mr-60 top-20 mt-8 font-serif font-bold">Born on May 5, 1974, in Karachi, Kamran hails from the Tessori family, renowned in the international</p>
<p className="text-center -mr-60 top-20 font-serif font-bold"> gold market. The family has been involved in the jewelry business since 1935, earning recognition for</p>
<p className="text-center -mr-60 top-20 font-serif font-bold">crafting elegant designs Kamran successfully expanded his family’s gold business.</p> 
</div>

{/* business achievment  */}
<div>
<h1 className="text-4xl text-blue-500  underline  font-semibold flex justify-around  mt-9  hover:text-green-600">Business Achievements </h1>
<p className="text-center -mr-60 top-20 mt-8 font-serif font-bold">Kamran successfully expanded his family’s gold business, "Tessori, the Art of</p>
<p className="text-center -mr-60 top-20 font-serif font-bold"> Jewelry," which operates internationally. His efforts earned him accolades like the</p>
<p className="text-center -mr-60 top-20 font-serif font-bold">"Businessman of the Year" award, highlighting his contributions to Pakistan's</p> 
<p className="text-center -mr-60 top-20  font-serif font-bold">business community.</p>
</div>

{/* conclusion */}
<div>
<h1 className="text-4xl text-blue-500  underline  font-semibold flex justify-around  mt-9  hover:text-green-600">Conclusion </h1>
<p className="text-center -mr-60 top-20 mt-8 font-serif font-bold">Kamran Tessori’s journey from the gold industry to the political stage reflects his versatility and</p>
<p className="text-center -mr-60 top-20 font-serif font-bold">dedication. His story inspires many who aspire to make a difference in the business and governance</p>

</div>
{/* Cards */}
<div className="flex mt-12 ">
<div className=" w-[550px]  h-[350px]  rounded-full overflow-hidden shadow-lg  ml-12  px-2">
<Image src="/images/first.png"     objectFit="contain" width={430} height={50} alt="image"  /></div>
{/* 2 pic */}
<div className=" w-[550px]   h-[350px]  rounded-full overflow-hidden shadow-lg  ml-12  px-2">
<Image src="/images/first.png"     objectFit="contain" width={430} height={50} alt="image"  /></div>
{/* 3 pic */}
<div className=" w-[550px]   h-[350px]  rounded-full overflow-hidden shadow-lg  ml-12  px-2">
<Image src="/images/first.png"     objectFit="contain" width={430} height={50} alt="image"  /></div>
</div>
{/* comment section */}
 

<div className="flex flex-col justify-between h-200 space-x-3 mt-12">
      <h1 className="text-4xl flex justify-center mt-12 ">Add Comments</h1>

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
          className="py-2 px-4 bg-green-900 text-white rounded-md ml-2 "> Add Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="mt-12">
        <h2 className="text-2xl flex justify-center ">Comments:</h2>
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





</div>



    </main>


    
  )
}

export default blog1




















