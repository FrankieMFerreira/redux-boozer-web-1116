import React from 'react';
import { fetchCocktails } from '../actions/index.js'
import { currentCocktail } from '../actions/index.js'
import { connect } from 'react-redux'

class cocktailsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchCocktails()
  }

  handleClick(event){
    event.preventDefault()
    this.props.currentCocktail(event.target.value)
    //let action = currentCocktail()
    //debugger
    //this.props.currentCocktail = action.payload
  //  debugger
    //dispatch(action)
    //event.target.value is the name
  }

  render(){
    //debugger
    return(
      <div>
      {this.props.cocktails.cocktails.map((cocktail, index) => {
         return <button key={index} onClick={this.handleClick.bind(this)} value={cocktail.name}>{cocktail.name}</button>
       })}
    </div>
    )
  }
}

function mapStateToProps(state){
  //debugger
  return {
    cocktails: state,
    currentCocktail: "straight gin"
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch(action)
    },
    currentCocktail: function(name){
      let action = currentCocktail(name)
      dispatch(action)
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(cocktailsIndex)
