import {SEARCH_RECIPES,FETCH_RECIPES} from '../types'

const initialState={
text:'',
recipes:[],
loading:false,
recipe:[]
}

export default function (state=initialState,action){
switch(action.type){
    case SEARCH_RECIPES :
    return{
        ...state,
      text:action.payload,
      loading:false
    }
    case FETCH_RECIPES:
    return{
        recipes:action.payload
    }
    default:
        return state
}


}