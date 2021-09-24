import React from 'react';
import { Link } from "gatsby";
import '../../global-styles/global.css';

const post = ({props}) => {
  return (
    <div class="max-w-sm px-1 rounded overflow-hidden">
      <img class="w-full h-44 md:h-56 rounded-lg" src={props.image.fluid.src}/>
      <section class="mb-5">
        <h3 class="font-bold text-xl mb-2">{props.title}</h3>
        <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <p class="mt-2">
          <Link class="inline-block bg-gray-200 hover:shadow-lg rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"to={`/blogpost/${props.slug}`}>Read more 👈</Link>
        </p>
      </section>
    </div>
  )
}

export default post
