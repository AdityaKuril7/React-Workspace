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
    <div className="w-[calc(100vw-64px)] h-[calc(100vh-64px)] flex justify-center items-center ml-16 pl-2 mt-18">
      <div className="h-120 w-120 rounded-2xl shadow-md shadow-black/70 p-5 bg-black/20">
        <div>
          <label className="block mt-3 mb-1" htmlFor="">
            User Name
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-sections"
            type="text"
          />
        </div>
        <div>
          <label className="block mt-3 mb-1" htmlFor="">
            Image
          </label>

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="input-sections"
          />
        </div>
        <div>
          <label className="block mt-3 mb-1" htmlFor="">
            Caption
          </label>
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="input-sections"
            type="text"
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
            className="btns hover:bg-green-600 hover:border-none hover:translate-y-[-5px] hover:text-white"
          >
            Post
          </button>
          <button
            onClick={() => setAddCard(!addCard)}
            className="btns hover:bg-red-600 hover:border-none hover:translate-y-[-5px] hover:text-white"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
