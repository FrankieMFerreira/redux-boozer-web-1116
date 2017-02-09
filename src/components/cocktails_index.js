import React from 'react';
import { fetchCocktails } from '../actions/index.js'
import { currentCocktail } from '../actions/index.js'
import { connect } from 'react-redux'

class cocktailsIndex extends React.Component{
//when component mounts to DOM, set action and dispatch to fetch cocktails
  componentDidMount(){
    this.props.fetchCocktails()
  }

  handleClick(event){
    event.preventDefault()
    this.props.currentCocktail(event.target.value)
  }

  render(){
    //debugger
    return(
      <div>
      {this.props.cocktails.map((cocktail, index) => {
         return <button key={index} onClick={this.handleClick.bind(this)} value={cocktail.name}>{cocktail.name}</button>
       })}
    </div>
    )
  }
}

function mapStateToProps(state){
  //'schema' of states we can access, but doesn't make changes to state
  return {
    cocktails: state.cocktails
  }
}

//saying what we want to add to props
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


export default connect(mapStateToProps, mapDispatchToProps)(cocktailsIndex) //connect changes the props
