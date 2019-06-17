//core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
//existing component imports
import withHTTPRequests from './../HOCS/withHTTPRequests';

//CSS imports
import '../styles/Dashboard.css';
import { Markup } from 'interweave';

class DashBoardComponent extends Component {
  render(){
    const{
      recipe
    }=this.props;
  
    return (
      <div className="specificRecipe">
        <Markup content={recipe.imagePath} />
        {/*<img src={recipe.imagePath} alt="recipepic" className="specificRecipeImg"/>*/}
        <div className="information-recept">
          <h1 className="specRecipeName">{recipe.name}</h1>
          <div className="stars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
            <div>
              <br/>
              <h2>Förberedelsetid : {recipe.preparationTime}</h2>
          </div>
          <p className="ingress">{recipe.preamble}</p>
          <Button className="spara"><i className="fa fa-heart" aria-hidden="true"></i> Spara</Button>
        </div>
        <div className="to-do">
        <div className="ingredienser">
            <h1>Ingredienser</h1>
            <h2 className="receptfor">Recept för: {recipe.portions} portioner
              {/*
                <select>
                  <option className="opt" value="2">2 portioner</option>
                  <option className="opt" value="4">4 portioner</option>
                  <option className="opt" value="6">6 portioner</option>
                  <option className="opt" value="8">8 portioner</option>
              </select>
                */}
              </h2>
              <Markup content={recipe.ingredients} />


        </div>
        <div className="do-like">
            <h1 className="h1dolike">Gör så här:</h1>
            <Markup content={recipe.preparation} />
        </div>
    </div>
      </div>
    );
  }
}

export default withHTTPRequests(DashBoardComponent);