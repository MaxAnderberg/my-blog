import React from 'react';
import { Link } from "gatsby";
import './Nav.css';

const index = () => {
  
  return (
    <nav class="flex flex-row text-left pt-5 pb-1 px-6 bg-white shadow" >
      <section class="ml-5 mr-20 font-bold text-xl">
        <Link to='/'>&lt;max/&gt;</Link>
      </section>
      <section class='uppercase'>
        <Link
        className="text-lg font-semibold mr-1 no-underline text-grey-darkest hover:underline"
        to="/">
           Home
        </Link>
        <Link className="text-lg font-semibold mr-1 no-underline text-grey-darkest hover:underline" 
        to="/about">About</Link>
      </section>
    </nav>
  )
}

export default index
