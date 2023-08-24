import React from 'react'
import "./FavouriteStar.css"
import { useState } from 'react'

const FavouriteStar = () => {

    const [like,setLike] = useState('notFavorite')

    const handleBtn = ()=> {
    
        if(like === 'notFavorite'){
          setLike('isFavorite')
        }
        if(like === 'isFavorite'){
          setLike('notFavorite')
        }
      }
  return (
    <button onClick={handleBtn} className={like}></button>
  )
}

export default FavouriteStar