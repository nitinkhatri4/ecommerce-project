import { Link } from "react-router-dom";
import Mobiles from "./Mobiles";
const Navbar = () => {
  return (
    <>
      <div className="bg-emerald-900 h-16 flex font-serif flex-row justify-around items-center flex-wrap relative">
        <div className="text-[#090c9b] font-bold text-xl bg-zinc-300 rounded-xl p-1 border-2 border-white  hover:cursor-pointer">
          <h2>
            <Link to="/home">ShopSphere</Link>
          </h2>
        </div>
        <div className=" hover:cursor-pointer">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg py-0.5 px-20 text-center bg-slate-100"
          />
        </div>
        <div>
          <ul className="flex flex-row text-lg gap-10 font-bold text-white">
            <li className="hover:bg-slate-600 hover:cursor-pointer hover:rounded-md hover:transition hover:duration-300">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:bg-slate-600 hover:cursor-pointer hover:rounded-md hover:transform hover:duration-300">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:bg-slate-600 hover:cursor-pointer hover:rounded-md hover:transform hover:duration-300">
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
