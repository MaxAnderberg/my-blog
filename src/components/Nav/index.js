import React from 'react';
import { Link } from "gatsby";

const index = () => {
  return (
    <nav class="flex flex-row justify-between text-left items-baseline py-4 px-6 bg-white shadow">
        <Link class="text-2xl no-underline text-grey-darkest hover:text-blue-dark" to="/">Home</Link>
        <Link class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"  to="/about">About</Link>
        <Link class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"  to="/about">About</Link>
    </nav>
  )
}

export default index
