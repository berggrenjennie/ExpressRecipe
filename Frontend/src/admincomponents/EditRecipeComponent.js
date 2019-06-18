/* AdminComponent is a class component which has the information about recipe in the constructor:
the component has also five methods:
1-componentDidMount:is a lifecycle method which called after the function getRecipes from HOCS to display all
the recipes in database.
2-handleInputChange: To control and change the value of the input field in the form by using setState.
3-addrecipeName: To add the informations of the recipe to the database.
4-removrecipeName: To remove the informations of the recipe from the database.
*/
import React, { Component , Fragment} from 'react';
import CardComponent from '../admincomponents/CardComponent';
import {Container,Row,Col,Button,Form,Table} from 'react-bootstrap';

/* withHTTPRequests is a Higher-order component which takes DashBoardComponent and returns a
new component*/
import withHTTPRequests from './../HOCS/withHTTPRequests';
import axios from 'axios';
import PropTypes from 'prop-types';

import "../styles/Recipes.css"

class EditRecipeComponent extends Component {

  constructor(props) {
    super(props);
        this.state ={
             recipeList:[],
             category: '',
             name: '',
             preamble:'',
             ingredients:'',
             preparation:'',
             imagePath:'',
             videoPath:'',
             portions:4,
             preparationTime:'',
             diet:'',
             caughtError:false
          };
    }

  componentDidMount(){
    const {
        match: {
          params
        }
      } = this.props;

    let recipeId = params.id;

    axios.get('http://localhost:2000/recipes/'+recipeId)
    .then(response => {
      const data = response.data;
      this.setOldRecipe(data);
      this.setState({
        recipeList:data
      })
    });
  }


/*One function to handle all the input field data changes, where 'name' is field changed
 and event is the incoming data change to that field. This function then sets the appropriate state.
*/
  handleInputChange = name => event => {
    const state = {};
    state[name] = event.target.value;
    this.setState(state);
  };

  setOldRecipe(recipe) {
    this.setState({
      category:recipe.category,
      name: recipe.name,
      preamble:recipe.preamble,
      ingredients:recipe.ingredients,
      preparation:recipe.category,
      imagePath:recipe.imagePath,
      videoPath:recipe.videoPath,
      portions:recipe.portions,
      preparationTime:recipe.category,
      diet:recipe.diet
    });
  }

/*A method which adds an object (newrecipe) to API,
 by using Post method.
}*/
  editRecipe= event => {
    event.preventDefault();
    let url = 'http://localhost:2000/recipes/';
    const editRecipe = {
      category:this.state.category,
      name:this.state.name,
      preamble:this.state.preamble,
      ingredients:this.state.ingredients,
      preparation:this.state.preparation,
      imagePath:this.state.imagePath,
      videoPath:this.state.videoPath,
      portions:this.state.portions,
      preparationTime:this.state.preparationTime,
      diet:this.state.diet
    }

    axios
        .put(url + this.state.recipeList._id, editRecipe)
        .then(response => {
           //sconsole.log('Success:', response);
        }).catch(error => {
          if (error.response.data.code === 11000) {
            this.setState({ caughtError: true });
          }
        })
 }

/*We render two card's components*/
  render(){
    const {
      category,
      name,
      preamble,
      ingredients,
      preparation,
      imagePath,
      videoPath,
      portions,
      preparationTime,
      diet
    } = this.state;

    return (
      <Fragment>
        <Container className="table">
          <Row>

          <Col  lg="6" >
            <div >
              <h1 className="recTable">Recept Tabell</h1>
              <br/>
              <Table striped bordered hover responsive="sm">
                  <tbody>
                    <tr>
                      <td>Namn</td><td>{name}</td>
                    </tr>
                    <tr>
                      <td>Kategori</td><td>{category}</td>
                    </tr>
                    <tr>
                      <td>Ingress</td><td>{preamble}</td>
                    </tr>
                    <tr>
                      <td>ingredients</td><td>{ingredients}</td>
                    </tr>
                    <tr>
                      <td>preparation</td><td>{preparation}</td>
                    </tr>
                    <tr>
                      <td>imagePath</td><td>{imagePath}</td>
                    </tr>
                    <tr>
                      <td>videoPath</td><td>{videoPath}</td>
                    </tr>
                    <tr>
                      <td>portions</td><td>{portions}</td>
                    </tr>
                    <tr>
                      <td>preparationTime</td><td>{preparationTime}</td>
                    </tr>
                    <tr>
                      <td>diet</td><td>{diet}</td>
                    </tr>
                  </tbody>
               </Table>

          </div>
        </Col>
        <Col  lg="6">
          <div >
            <CardComponent >
            <h1>Redigera Recept</h1>
              <Form onSubmit={this.editRecipe}>
                <Form.Control as="select" className="inputForm" size="lg" value={category}  onChange={this.handleInputChange('category')} >
                  <option>välj kategori</option>
                  <option>Fisk</option>
                  <option>Kött</option>
                  <option>Kyckling</option>
                  <option>Vegetariskt</option>
                  <option>Dessert</option>
                  <option>Dryck</option>
                </Form.Control>
                <br />
                <Form.Label><span className="star">*</span>Recipe Name :</Form.Label>
                <Form.Control className="inputForm" size="lg" type="text"
                  value={name}  onChange={this.handleInputChange('name')} />
                <br />
                <Form.Label><span className="star">*</span>Preamble :</Form.Label>
                <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                  value={preamble}  onChange={this.handleInputChange('preamble')} />
                <br />
                <Form.Label><span className="star">*</span>Ingredients :</Form.Label>
                <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                  value={ingredients}  onChange={this.handleInputChange('ingredients')} />
                <br />
                <Form.Label><span className="star">*</span>Preparation :</Form.Label>
                <Form.Control as="textarea" rows="10" className="inputForm" size="lg" type="text"
                  value={preparation}  onChange={this.handleInputChange('preparation')} />
                <br />
                <Form.Label><span className="star">*</span>Image's name :</Form.Label>
                <Form.Control className="inputForm" size="lg" type="text"
                  value={imagePath}  onChange={this.handleInputChange('imagePath')} />
                <br />
                <Form.Label><span className="star">*</span>Vido link :</Form.Label>
                <Form.Control className="inputForm" size="lg" type="text"
                  value={videoPath}  onChange={this.handleInputChange('videoPath')} />
                <br />
                <Form.Label><span className="star">*</span>The number of portions :</Form.Label>
                <Form.Control className="inputForm" size="lg" type="Number"
                  value={portions}  onChange={this.handleInputChange('portions')} />
                <br />
                <Form.Label><span className="star">*</span>Preparation's time :</Form.Label>
                <Form.Control className="inputForm" size="lg" type="text"
                  value={preparationTime}  onChange={this.handleInputChange('preparationTime')} />
                <br />
                <Form.Label><span className="star">*</span>Allergiinformation :</Form.Label>
                <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                  value={diet}  onChange={this.handleInputChange('diet')} />
                <br />
                {/*We call addrecipeName method when we click the submit button in the form .*/}
                <Button variant="success" type="submit">Edit Recipe</Button>
              </Form>

              <br />
          </CardComponent>
        </div>
      </Col>

      </Row>
    </Container>
  </Fragment>
    );
  }
}

export default withHTTPRequests(EditRecipeComponent);
