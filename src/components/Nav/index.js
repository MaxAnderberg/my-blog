import React from 'react';
import { Link } from "gatsby";
import './Nav.css';

const index = () => {
  
  return (
    <nav class="text-left pr-5 pt-5 pl-5 md:mx-32">
      <section class="font-bold text-2xl mb-8 ">
        <Link to='/'>&lt;max/&gt;</Link>
      </section>
      <section class='uppercase'>
        <Link
        className="text-md font-semibold mr-1 no-underline text-grey-darkest hover:underline pr-2"
        to="/">
          Home
        </Link>
        <Link className="text-md font-semibold mr-1 no-underline text-grey-darkest hover:underline px-2" 
        to="/about">About</Link>
      </section>
    </nav>
  )
}

export default index
