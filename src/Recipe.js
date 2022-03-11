import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    
    <div className='head'>
        <h1  >{title}</h1>
        <p className='cal' >Calories: {calories}</p>
        <img className='img'  src={image} alt=""/>
        <ol>
          {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
          ))}
        </ol>
    </div>
  )
}

export default Recipe;