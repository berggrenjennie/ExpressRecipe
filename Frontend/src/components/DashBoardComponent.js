//core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

//existing component imports
import withHTTPRequests from './../HOCS/withHTTPRequests';

//CSS imports
import '../styles/Dashboard.css';

class DashBoardComponent extends Component {

  constructor(props) {
    super(props);  
  }

  render(){
    return (
      <div className="specificRecipe">
        <img src="https://www.norsmor.dk/wp-content/uploads/2018/01/bla%CC%8Ab%C3%A6rsmoothie-700x700.jpg" alt="recipepic" className="specificRecipeImg"/>
        <div className="information-recept">
          <h1 className="specRecipeName">RECIPE.NAME!</h1>
          <div className="stars">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <p className="ingress">Recept på supergod kladdig kladdkaka. Den är snabb och enkel att göra eftersom du rör ihop smeten direkt i kastrullen. Avnjut med vispad grädde.</p>
          <Button className="spara"><i class="fa fa-heart" aria-hidden="true"></i> Spara</Button>
        </div>
        <div class="to-do">
        <div class="ingredienser">
            <h1>Ingredienser</h1>
            <h2 className="receptfor">Recept för: 
              <select>
                <option className="opt" value="2">2 portioner</option>
                <option className="opt" value="4">4 portioner</option>
                <option className="opt" value="6">6 portioner</option>
                <option className="opt" value="8">8 portioner</option>
            </select></h2>
            <p>100g Smör</p>
            <p>2 1/2 dl strösocker</p>
            <p>2 ägg</p>
            <p>1 dl vetemjöl</p>
            <p>3 msk kakao</p>
            <p>1 tsk vaniljsocker</p>
        </div>
        <div className="do-like">
            <h1 className="h1dolike">Gör så här:</h1>
            <p>Sätt ugnen på 175°</p>
            <p>Smält smöret i en kastrull. Lyft av kastrullen från plattan</p>
            <p>Rör ner socker och ägg, blanda väl. Rör ner övriga ingredienser så att allt blir väl blandat</p>
            <p>Häll smeten i en smord och bröad form med löstagbar kant, ca 24 cm i diameter</p>
            <p>Grädda mitt i ugnen ca 15min. Kakan blir låg med ganska hård yta och lite kladdig i mitten</p>
            <p>Låt kakan kallna. Pudra över florsocker. Servera med grädde.</p>
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