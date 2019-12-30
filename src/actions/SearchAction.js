 import {SEARCH_RECIPES,FETCH_RECIPES} from '../types'
 import axios from 'axios'
 const app_id="f1053257"
 const app_key="e57c8ba16650c26e92d456de2e1308ad	"
 export const searchRecipes=(text)=>(dispatch)=>{
     dispatch({
         type:SEARCH_RECIPES,
         payload:text
     })
 }

 export const fetchRecipes=(text)=>(dispatch)=>{
axios.get(`https://api.edamam.com/search?q=${text}&app_id=${app_id}&app_key=${app_key}&
&from=0&to=10&calories=591-722&health=alcohol-free`)
.then(response=> dispatch({
    type:FETCH_RECIPES,
    payload:response.data.hits
}))
.catch(err => console.log(err))
 }