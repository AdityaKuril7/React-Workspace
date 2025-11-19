import React, { useState } from "react";
import { useContext } from "react";
import { mycontext } from "../context/MyContext";
import axios from "axios";
function AddCard() {
  const { addCard, setAddCard } = useContext(mycontext);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const handleAddClick = async () => {
    const formData = new FormData();
    formData.append("Username", username);
    formData.append("Image", image);
    formData.append("Caption", caption);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/Userpost/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload success:", res.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setAddCard(!addCard)
    window.location.reload()
    
  };

  return (
    <div className="w-[calc(100vw-64px)] h-[calc(100vh-64px)] flex justify-center bg-gray-900 items-center ml-16 pl-2 mt-18">
      <div className={`${image ? "h-155":"h-120"} w-130 rounded-2xl shadow-[0px_0px_10px_rgba(255,210,255,0.3)] p-8 bg-gray-900 `}>
        <div>
          <label className="block mt-5 font-mono font-bold text-white mb-2 text-[20px]" htmlFor="">
            User Name
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-sections"
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div>
          <label className="block mt-5 font-mono font-bold text-white mb-2 text-[20px]" htmlFor="">
            Image
          </label>

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="input-sections"
          />
        </div>
        <div>
          <label className="block mt-5 font-mono font-bold text-white mb-2 text-[20px]" htmlFor="">
            Caption
          </label>
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="input-sections"
            type="text"
            placeholder="Enter Caption"
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          {image && (
            <img src={URL.createObjectURL(image)} alt="preview" width="200" />
          )}
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            onClick={handleAddClick}
            className="btns bg-gray-950 hover:bg-green-500"
          >
            Post
          </button>
          <button
            onClick={() => setAddCard(!addCard)}
            className="btns bg-gray-950 hover:bg-red-500"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
