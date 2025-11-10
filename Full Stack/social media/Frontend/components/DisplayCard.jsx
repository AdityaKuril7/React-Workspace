import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { BsTrash } from "react-icons/bs";

export default function DisplayCard({ post, index }) {
  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={post.Image}
          alt="Post"
        />
      </div>

      <div className="p-5 flex flex-col justify-between ">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.Username}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {post.Caption}
          </p>
        </div>

        <div>
        <button className="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-300">
          <BsTrash />
        </button>
        </div>
      </div>
    </div>
  );
}
