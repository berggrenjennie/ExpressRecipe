//core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import { Markup } from 'interweave';

//existing component imports
import withHTTPRequests from './../HOCS/withHTTPRequests';
import CommentComponent from '../components/CommentComponent';

//CSS imports
import '../styles/Dashboard.css';
import '../styles/Comment.css';


class DashBoardComponent extends Component {
  render(){
    const {
      recipe
    } = this.props;
    return (
      <div className="specificRecipe">
        <div className="flexcontainer">
        <Markup content={recipe.imagePath} />
          <div className="information-recept">
            <h1 className="specRecipeName">{recipe.name}</h1>
            <div className="stars">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <h2 className="prep">Förberedelsetid: {recipe.preparationTime}</h2>
            <p className="ingress">{recipe.preamble}</p>
            <Button className="spara"><i className="fa fa-heart" aria-hidden="true"></i> Spara</Button>
          </div>
        </div>
        <div className="to-do">
          <div className="ingredienser">
            <h1>Ingredienser</h1>
            <h2 className="receptfor">Recept för: {recipe.portions} portioner</h2>
            <Markup content={recipe.ingredients} />
          </div>
          <div className="do-like">
            <h1 className="h1dolike">Gör så här:</h1>
            <Markup content={recipe.preparation} />
          </div>
        </div>
        <div className="aller">
            <h1 className="h1dolike">Allergi information</h1>
            <Markup content={recipe.diet} />
        </div>
        <CommentComponent/>
      </div>
    );
  }
}
export default withHTTPRequests(DashBoardComponent);