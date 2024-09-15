import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({rating}) => {
  return (
    <div className="book__ratings">
    {
        new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
    }
    {/* an array thats the length of the book rating, then mapping it to the star icons */}
    {
      !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-stroke"/>
    }
    {/* For half stars (non integers)*/}
    </div>
  )
}

export default Rating