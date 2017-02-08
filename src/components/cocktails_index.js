import React from 'react';
import { fetchCocktails } from '../actions/index.js'
import { connect } from 'react-redux'

// const defaultCocktails = [{id: 1, name: 'Gin and Tonic'}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];


class cocktailsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchCocktails()
  }
  render(){
    return(
      <div>
      {this.props.cocktails.map(function(cocktail, index){
         return <li key={index}>{cocktail.name}</li>
       })}
    </div>
    )
  }
}

function mapStateToProps(state){
  debugger
  return {
    cocktails: state
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(cocktailsIndex)
