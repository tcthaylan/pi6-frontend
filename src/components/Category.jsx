import React from 'react';
import './Category.css'

const Category = (props) => {
  const { image, name } = props;
  const url = `/images/categories/${image}`
  return(
    <div className="category">
      <img src={url} className="category-img"/>
      <h5 className="category-title">{name}</h5>
    </div>
  )
}

export default Category;