import React from 'react';
import { Link } from "gatsby";

const index = () => {
  return (
    <nav class="flex flex-row text-left py-4 px-6 bg-white shadow" >
        <Link class="text-lg font-semibold mr-1 no-underline text-grey-darkest hover:text-blue-dark " to="/">Home</Link>
        <Link class="text-lg font-semibold mr-1 no-underline text-grey-darkest hover:text-blue-dark " to="/about">About</Link>
    </nav>
  )
}

export default index
