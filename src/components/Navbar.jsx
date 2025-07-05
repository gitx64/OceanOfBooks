// import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };


  return (
    <div className="bg-emerald-900 text-emerald-50 p-3.5 rounded-tl-2xl rounded-tr-2xl">

      <Link to='/' className="mr-5 hover:border-emerald-300 hover:border-2 hover:text-emerald-200 focus:bg-emerald-300 focus:text-emerald-950 p-2.5 rounded-2xl">Home</Link>

      <Link to='/books' className="mr-5 hover:border-emerald-300 hover:text-emerald-200 focus:bg-emerald-300 focus:text-emerald-950 p-2.5 rounded-2xl hover:border-2">MyBooks</Link>

      <Link to='/contact' className="mr-5 hover:border-emerald-300 hover:text-emerald-200 focus:bg-emerald-300 focus:text-emerald-950 p-2.5 rounded-2xl hover:border-2">Contact Us</Link>
      
       
    </div>
  );
}

export default Navbar;
