import React from 'react'
import { RecipeCard,Button} from '../style';
import {Link} from 'react-router-dom'
const Recipe=({title,calories,image})=>  {
        return (
               <RecipeCard>
                   <h1 style={{fontSize:20}}>{title}</h1>
<p>{calories}</p>
<img src={image} alt="food" size={5} style={{width:250,height:200,borderRadius:10,marginBottom:5}}/>
     <Button>
     <Link to='/Ingredients' style={{textDecoration:'none'
}}>
     go to ingredients
     </Link>
     </Button>    
</RecipeCard>
         
        )
    }



export default Recipe
