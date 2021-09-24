import React from 'react';
import { Link } from "gatsby";
import './Nav.css';

const index = () => {
  const active = `font-extrabold text-base`
  return (
    <nav class="text-left pr-5 pt-5 pl-5 xl:mx-32">
      <section class="font-bold text-2xl mb-8 ">
        <Link to='/'>&lt;max/&gt;</Link>
      </section>
      <section class='uppercase'>
        <Link
          className="text-sm font-semibold mr-1 no-underline text-grey-darkest hover:underline pr-2"
          activeClassName={active}
          to="/"
        >
          Home
        </Link>
        <Link className="text-sm font-semibold mr-1 no-underline text-grey-darkest hover:underline px-2"
        activeClassName={active}
        to="/about">About</Link>
      </section>
    </nav>
  )
}

export default index
