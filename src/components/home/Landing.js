import React, { Component } from 'react'
import SearchForm from '../home/SearchForm'
import {connect} from 'react-redux'
import Spinner from '../../Spinner'
import RecipesContainer from '../../layout/RecipesContainer'
export class Landing extends Component {
    render() {
const {loading} =this.props
        return (
            <div>
                <SearchForm/>
                {loading?<Spinner/>:<RecipesContainer/>}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
loading:state.recipes.loading

})


export default connect(mapStateToProps)(Landing)

