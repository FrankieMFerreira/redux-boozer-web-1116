import React from 'react';
import { currentCocktail } from '../actions/index.js'
import { connect } from 'react-redux'



class cocktailsShow extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        {this.props.currentCocktail}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentCocktail: state.currentCocktail
  }
}





export default connect(mapStateToProps)(cocktailsShow)
