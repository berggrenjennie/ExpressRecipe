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


/*
  <div className="container blog" id="comments">
    <h5>COMMENTS:</h5>
    <div className="media">
        <div className="media-left">
            <img src={EvaAlHindy} className="media-object" style={{width: "80px"}}/>
        </div>
        <div className="media-body">
            <h4 className="media-heading">Laura Gonzales <span className="posted">Posted on February 19, 2016</span></h4>
            <p className="quote">“I think that emotional content is an image’s most important element, regardless of the photographic technique.
            Much of the work I see these days lacks the emotional impact to draw a reaction from viewers, or remain in their hearts.”</p>
            <button classNameName="btn btn-default btn-xs">REPLY</button>
            <div className="media">
                <div className="media-left">
                    <img src={FatmeMustafa} className="media-object" style={{width:"80px"}}/>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">Cecilie Schmidth-Eriksen <span className="posted">Posted on February 19, 2016</span></h4>
                    <p className="quote">“It’s about reacting to what you see, hopefully without preconception. You can find pictures anywhere. It’s simply a
                    matter of noticing things and organising them. You just have to care about what’s around you and have a concern with humanity and the
                    human comedy.”</p>
                    <button className="btn btn-default btn-xs">REPLY</button>
                </div>
            </div>
        </div>
    </div>
    <div className="media">
        <div className="media-left">
            <img src={FatmeMustafa} className="media-object" style={{width:"80px"}}/>
        </div>
        <div className="media-body">
            <h4 className="media-heading">John Doe <span className="posted">Posted on February 23, 2016</span></h4>
            <p className="quote">“To me, photography is an art of observation. It’s about finding something interesting in an ordinary place… I’ve found it has
            little to do with the things you see and everything to do with the way you see them!”</p>
            <button className="btn btn-default btn-xs">REPLY</button>
        </div>
    </div>
</div>

<div className="container comment">
    <h4>Leave Us Your Comments Below:</h4>
        <form>
            <div className="form-group">
                <textarea type="text" rows="5" className="form-control" placeholder="Your comments..."></textarea>
            </div>
            <button type="submit" className="btn btn-default">SUBMIT COMMENT</button>
        </form>
</div>

*/
