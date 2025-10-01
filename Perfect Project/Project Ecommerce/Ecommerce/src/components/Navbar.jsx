import { Link } from "react-router-dom";
import { FaCartArrowDown, FaHeart, FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex h-20 justify-center items-center top-0">
      <p className="text-4xl font-bold">ADICON</p>
      <input
        type="text"
        className="border-2 rounded-[15px] p-3 w-[50%] mr-20 ml-20 "
        placeholder="Search Hear"
      />
      <div className="flex space-x-5 ">
        <p className="icons">
          <FaCartArrowDown />
        </p>
        <p className="icons">
          <FaUser />
        </p>
        <Link to="/Wishlist">
          <p className="icons">
            <FaHeart />
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
