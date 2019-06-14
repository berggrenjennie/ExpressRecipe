/* AdminComponent is a class component which has information about recipe in the constructor:

the component has also five methods:
1-componentDidMount:is a lifecycle method which called after the function fetchrecipes from HOCS to display all
the recipes in database.
2-handleInputChange: To control and change the value of the input field in the form by using setState.
3-addrecipeName: To add the informations of the recipe to the database.
4-removrecipeName: To remove the informations of the recipe from the database.
*/

// Core functionality from React & Bootstrap
import React, { Component , Fragment} from 'react';
import { Container, Row, Col, Button, Form, Table} from 'react-bootstrap';
import PropTypes from 'prop-types';

// Existing component imports
import CardComponent from '../admincomponents/CardComponent';
import withHTTPRequests from './../HOCS/withHTTPRequests';    //withHTTPRequests is a Higher-order component which takes DashBoardComponent and returns a new component

class RecipesComponent extends Component {

  static propTypes = {
    recipeList: PropTypes.array,    // throws a warning if recipeList is not array
    fetchrecipes: PropTypes.func.isRequired   //the function fetchrecipes is required
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
      portions:0,
      preparationTime:'',
      diet:''
    };
  }

  componentDidMount(){
    this.props.fetchrecipes();    //calls the function (fetchrecipes()) which is props received from the withHTTPRequests component
  }

  handleInputChange = name => event => {    //handles all the input field data changes, where 'name' is field changed and event is the incoming data change to that field. This function then sets the appropriate state
    const state = {};
    state[name] = event.target.value;
    this.setState(state);
  };

  addrecipeName = event => {    //adds an object (newrecipe) to the API through post
    event.preventDefault();
    let url = 'http://localhost:2000/recipes';
    const newrecipe = {
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

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newrecipe),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      this.props.fetchrecipes();
      this.setState({
        category: '',
        name: '',
        preamble:'',
        ingredients:'',
        preparation:'',
        imagePath:'',
        videoPath:'',
        portions:0,
        preparationTime:'',
        diet:''
      })
    })
    .catch(error => console.error('Error:', error));
  }

  removrecipeName(id) {   //deletes a recipe from the API through delete
    console.log("id", id);
    fetch('http://localhost:2000/recipes/' + id, {
      method: 'delete'
    })
    .then(response => {
      // console.log('Success:', JSON.stringify(response));
      this.props.fetchrecipes();
    })
    .catch(error => console.error('Error:', error));
  }

  render() {    //render two card components
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