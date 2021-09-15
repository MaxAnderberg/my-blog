import React from 'react';
import { Link } from "gatsby";

const post = ({props}) => {
  console.log(props)
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image.fluid.src}/>
      <Link to={`/blogpost/${props.slug}`}>Read more</Link>
    </div>
  )
}

export default post
