export default function currentCocktail(state="", action){
  switch (action.type){
    case 'CURRENT_COCKTAIL':
      return action.payload
    default:
      return state
  }
}
