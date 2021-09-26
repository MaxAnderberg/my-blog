import React from 'react';
import { Link } from "gatsby";
import '../../global-styles/global.css';
import { motion } from 'framer-motion';

const post = ({props}) => {
  return (
    <div class="max-w-sm px-1 rounded overflow-hidden">
      <img class="w-full h-44 md:h-56 rounded-lg" src={props.image.fluid.src}/>
      <section class="mb-5">
        <h3 class="font-bold text-xl mb-2">{props.title}</h3>
        <p class='text-gray-400 text-sm mb-2'>{props.publishedDate}</p>
        <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
          <Link to={`/blogpost/${props.slug}`}>
            <motion.button 
              whileHover={{
                scale: 1.1,
                originX:0,
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                transition: { type: 'spring', stiffness: 300, duration: 0.2},
              }}
            class="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Read more 👈
            </motion.button>
          </Link>
      </section>
    </div>
  )
}

export default post
