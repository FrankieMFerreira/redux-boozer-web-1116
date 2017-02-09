import React, { Component } from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index'
import CocktailsShow from './cocktails_show'

//render each component
export default () => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
           💃🍹 You look like you could use a drink, mami🍸🥃
           <br/>
           (Ian is so teacher yay)
           < CocktailsIndex />
           < CocktailsShow />
        </div>
      </div>
    )

};
