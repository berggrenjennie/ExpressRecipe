// Core functionality from React & Bootstrap
import React, {Component,Fragment} from 'react';
import { Markup } from 'interweave';

// CSS imports
import '../styles/Recipe.css';
// import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import 'materialize-css@next';

class RecipeCardComponent extends Component {
  readMore(e) {
    alert("click ")
    // console.log("id",id);
    // this.props.history.push("/dashboard/"+id);
  }
  render() {
    const{
      recipe
    }=this.props
    return (
      <Fragment>
      <div className="grid-container">
        <div className="imgCardList">
        <Markup content={recipe.videoPath} />
        </div>
        <div className="titleCardList">{recipe.name}</div>
        <div className="bodyCardList">
          {recipe.preamble}
          <hr/>
          <Link to={"/dashboard/"+recipe._id} className="readMore"  style={{textDecoration: 'none'}}>
            Läsa mer ...
          </Link>
        {/*  <Button className="readMore" variant="danger" onClick={(e) => this.handleClick(e)} >Läsa mer ...</Button>*/}
        </div>
      </div>
    </Fragment>
    );
  }
}
export default RecipeCardComponent;
