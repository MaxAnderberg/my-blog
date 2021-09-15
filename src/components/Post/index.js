import React from 'react';
import { Link } from "gatsby";
import '../../global-styles/global.css';

const post = ({props}) => {
  console.log(props)
  return (
    <div class="max-w-sm px-1 rounded overflow-hidden">
      <img class="w-full rounded-lg" src={props.image.fluid.src}/>
      <section >
        <h3 class="font-bold text-xl mb-2">{props.title}</h3>
        <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <p>
          <Link class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"to={`/blogpost/${props.slug}`}>Read more 👈</Link>
        </p>
      </section>
    </div>
  )
}

export default post
