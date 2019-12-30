import React from 'react'
import { RecipeIngredientsCard,Button} from '../../style';
import{Link} from 'react-router-dom'
const RecipeIngredients=({ingredients,image})=>  {
        return (
               <RecipeIngredientsCard>
<img src={image} alt="food" size={5} style={{width:250,height:200,borderRadius:10,marginBottom:5,marginTop:5}}/>
  <h3>Ingredients</h3>
   <ol>
       {ingredients.map(ingredient=>(
          
           <li>{ingredient.text}</li>
       ))}
   </ol>
 
               <Button>
               <Link to={'/'}  style={{textDecoration:'none'}}>Go To Home
               </Link>
               </Button>
           
</RecipeIngredientsCard>
         
        )
    }



export default RecipeIngredients
