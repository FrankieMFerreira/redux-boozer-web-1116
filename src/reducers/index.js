import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';
import currentCocktail from './current_cocktail'



const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  currentCocktail: currentCocktail
})

export default rootReducer
