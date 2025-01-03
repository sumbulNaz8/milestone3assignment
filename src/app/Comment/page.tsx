"use client";
import { useState } from "react";

const State = () => {
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
    <div className="flex flex-col justify-between h-200 space-x-3 mt-12">
      <h1 className="text-4xl flex justify-center mt-12">Add Comments</h1>

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
          className="py-2 px-4 bg-red-700 text-white rounded-md ml-2"
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
  );
};

export default State;