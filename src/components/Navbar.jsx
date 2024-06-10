
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#FEA116] font-bold text-4xl">Restoran</div>
        <ul className="flex space-x-6 items-center">
          <li className="text-[#FEA116] text-xl">
            <Link to="/" >Home</Link>
          </li>
          <li className="text-white hover:text-[#FEA116] text-xl">
            <Link to="/About">About</Link>
          </li>
          <li className="text-white hover:text-[#FEA116] text-xl">
            <Link to="/Service">Service</Link>
          </li>
          <li className="text-white hover:text-[#FEA116] text-xl">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="text-white hover:text-[#FEA116] text-xl">
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <button className='btn bg-[#FEA116]  text-white p-3'>Book A Table</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;