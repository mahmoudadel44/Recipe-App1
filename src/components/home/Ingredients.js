import React, { Component } from 'react'
import {connect} from 'react-redux'
import {FormRecipeIngredients} from '../../style'
import RecipeIngredients from '../home/RecipeIngradients'
 class Ingredients extends Component {
    render() {
        const {recipes}=this.props;
        let content=''
       content=recipes.map((recipe,indxe)=> <RecipeIngredients ingredients={recipe.recipe.ingredients}
        key={indxe} image={recipe.recipe.image}/>)
        return (
           <FormRecipeIngredients>
               {content}
             
           </FormRecipeIngredients>
        )
    }
}

const mapStateToProps=(state)=>({
recipes:state.recipes.recipes
})
export default connect(mapStateToProps)(Ingredients)
