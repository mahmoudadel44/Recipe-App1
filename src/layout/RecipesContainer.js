import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {RecipeForm} from '../style'
import Recipe from './Recipe'
class RecipesContainer extends Component {
    render() {
        const {recipes}=this.props;
        let content=''
  content=recipes.length>0?recipes.map(recipe=> <Recipe title={recipe.recipe.label} 
    calories={recipe.recipe.calories} image={recipe.recipe.image}
    key={recipe.title}/>):null 
        return (
            <RecipeForm>
                {content}   
           
                </RecipeForm>
        )
    }
}

const mapStateToProps=(state)=>({
    recipes:state.recipes.recipes
})

export default connect (mapStateToProps)(RecipesContainer)
