import React, { Component } from 'react'
import {Form,Input,Button} from '../../style.js'
import {connect} from 'react-redux'
import {searchRecipes,fetchRecipes} from '../../actions/SearchAction'
 class SearchForm extends Component {
    onChange=e=>{
        this.props.searchRecipes(e.target.value)
        }
        onSubmit=e=>{
            e.preventDefault()
            this.props.fetchRecipes(this.props.text)
        }
    render() {
        return (
        <Form onSubmit={this.onSubmit}>
                <Input type="text" placeholder="Search recipe..." 
            onChange={this.onChange} 
               >
                </Input>
                <Button >Search</Button>
                </Form>
        )
        }
    }
  const mapStateToProps=(state)=>({
    text:state.recipes.text
  })
export default connect(mapStateToProps,{searchRecipes,fetchRecipes})(SearchForm)
