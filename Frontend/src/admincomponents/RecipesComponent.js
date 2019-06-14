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

class RecipesComponent extends Component {

  static propTypes = {
      getRecipes: PropTypes.func.isRequired,// The function getRecipes is required .
      recipeList: PropTypes.array.isRequired
    }

  constructor(props) {
  super(props);
    this.state ={
      category: '',
      name: '',
      preamble:'',
      ingredients:'',
      preparation:'',
      imagePath:'',
      videoPath:'',
      portions:4,
      preparationTime:'',
      diet:''
    };
  }

  /*A method that calls the function (getRecipes()) which is props received from withHTTPRequests component. */
  componentDidMount(){
    this.props.getRecipes();
  }

  /*One function to handle all the input field data changes, where 'name' is field changed and event is the incoming data change to that field. This function then sets the appropriate state.*/
  handleInputChange = name => event => {
    const state = {};
    state[name] = event.target.value;
    this.setState(state);
  };

  /*A method which adds an object (newrecipe) to API, by using Post method.*/
  addRecipe= event => {
    event.preventDefault();
    let url = 'http://localhost:2000/recipes';
    const newRecipe = {
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
    axios.post(url,newRecipe)
    .then(response => {
      this.props.getRecipes();
      this.setState({
        category: '',
        name: '',
        preamble:'',
        ingredients:'',
        preparation:'',
        imagePath:'',
        videoPath:'',
        portions:4,
        preparationTime:'',
        diet:''
      })
    })
    .catch(error => console.error('Error:', error));
  }

  /*A method which delete a special recipe from API, by using Delete method.*/
  removeRecipe(id) {
    axios.delete ('http://localhost:2000/recipes/' + id)
    .then(response => {
      this.props.getRecipes();
    })
    .catch(error => console.error('Error:', error));
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
        <Container>
          <Row>
            <Col lg="6">
              <div >
                <h1>Recipes Table</h1>
                <br/>
                <Table striped bordered hover variant="dark" responsive="sm">
                  <thead>
                    <tr>
                    <th>#</th>
                    <th>Recept namn</th>
                    <th>Receptet kategori</th>
                    <th>Ingress</th>
                    <th>Ta bort</th>
                  </tr>
                </thead>
                <tbody>
                  {/*render the newrecipeList array by using map and recipe.id as a key.*/}
                  {this.props.recipeList.map((recipe, index) =>
                    <tr key={recipe._id} >
                      <td>{index+1}</td>
                      <td>{recipe.name}</td>
                      <td>{recipe.category}</td>
                      <td>{recipe.preamble}</td>
                      <td><Button variant="danger" className="removeBtn" onClick={(e) => this.removrecipeName(recipe._id, e)} >x</Button></td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg="6">
            <div>
              <CardComponent>
                <Form onSubmit={this.addrecipeName}>
                  <Form.Control as="select" className="inputForm" size="lg" value={category}  onChange={this.handleInputChange('category')} >
                    <option>Välj kategori</option>
                    <option>Fisk</option>
                    <option>Kött</option>
                    <option>Kyckling</option>
                    <option>Vegetariskt</option>
                    <option>Dessert</option>
                    <option>Dryck</option>
                  </Form.Control>
                  <br/>
                  <Form.Label>Recept Namn:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text" 
                    value={name}  onChange={this.handleInputChange('name')} />
                  <br/>
                  <Form.Label>Ingress:</Form.Label>
                  <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                    value={preamble}  onChange={this.handleInputChange('preamble')} />
                  <br/>
                  <Form.Label>Ingredienser:</Form.Label>
                  <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                    value={ingredients}  onChange={this.handleInputChange('ingredients')} />
                  <br/>
                  <Form.Label>Förberedelse:</Form.Label>
                  <Form.Control as="textarea" rows="10" className="inputForm" size="lg" type="text"
                    value={preparation}  onChange={this.handleInputChange('preparation')} />
                  <br/>
                  <Form.Label>Bildnamn:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={imagePath}  onChange={this.handleInputChange('imagePath')} />
                  <br/>
                  <Form.Label>Videolänk:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={videoPath}  onChange={this.handleInputChange('videoPath')} />
                  <br/>
                  <Form.Label>Portioner:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="Number"
                    value={portions}  onChange={this.handleInputChange('portions')} />
                  <br/>
                  <Form.Label>Förberedelsetid:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={preparationTime}  onChange={this.handleInputChange('preparationTime')} />
                  <br/>
                  <Form.Label>Kost:</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={diet}  onChange={this.handleInputChange('diet')} />
                  <br/>
                  {/*call addrecipeName() when the submit button is clicked*/}
                  <Button variant="success" type="submit">Add recipe to database</Button>
                </Form>
                <br/>
              </CardComponent>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
}
export default withHTTPRequests(RecipesComponent);