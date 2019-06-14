// Core functionality from React & Bootstrap
import React, {Component} from 'react';

// CSS imports
import '../styles/Recipe.css'

class RecipeComponent extends Component {
  render() {
    return (
      <main className="recipes">
          <div className="recipesCard">
            <img className="imgCard" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"/>
            <h2 className="recipeTitle">Vegan Salad Bowl</h2>
            <div class="cardContent">
                <p>Ang Lorem Ipsum ay ginagamit na modelo ng industriya ng pagpriprint at pagtytypeset. 
                    Ang Lorem Ipsum ang naging regular na modelo simula pa noong 1500s, noong may isang di 
                    kilalang manlilimbag and kumuha ng galley.
                </p>
            </div>
          </div>
      </main>
    );
  }
}
export default RecipeComponent;