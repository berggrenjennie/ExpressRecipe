
/* AdminComponent is a class component which has the information about recipe in the constructor:

the component has also five methods:
1-componentDidMount:is a lifecycle method which called after the function fetchrecipes from HOCS to display all
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
import PropTypes from 'prop-types';

class RecipesComponent extends Component {

  static propTypes = {
      recipeList: PropTypes.array,// throws a warning if recipeList is not array.
      fetchrecipes: PropTypes.func.isRequired// The function fetchrecipes is required .
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

  /*A method that calls the function (fetchrecipes()) which is
  props received from withHTTPRequests component. */
  componentDidMount(){
          this.props.fetchrecipes();
  }

/*One function to handle all the input field data changes, where 'name' is field changed
 and event is the incoming data change to that field. This function then sets the appropriate state.
*/
  handleInputChange = name => event => {
    const state = {};
      state[name] = event.target.value;
      this.setState(state);
  };

/*A method which adds an object (newrecipe) to API,
 by using Post method.
}*/
  addrecipeName= event => {
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
       // console.log('Success:', JSON.stringify(response))
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

  /*A method which delete a special recipe from API,
   by using Delete method.
  }*/
  removrecipeName(id) {
    console.log("id",id);
    fetch('http://localhost:2000/recipes/' + id, {
           method: 'delete'
         })
         .then(response => {
           // console.log('Success:', JSON.stringify(response));
           this.props.fetchrecipes();
         })
         .catch(error => console.error('Error:', error));
  }

/*We render two card's components*/
  render(){
    const { category,
    name,
    preamble,
    ingredients,
    preparation,
    imagePath,
    videoPath,
    portions,
    preparationTime,
    diet} = this.state;

    return (
      <Fragment>
        <Container>
          <Row>
            <Col  lg="6">
              <div >
                <h1>Recipes Table</h1>
                <br/>
                <Table striped bordered hover variant="dark" responsive="sm">
                    <thead  >
                      <tr>
                        <th>#</th>
                        <th>Recipe's Name</th>
                        <th>Recipe's category</th>
                        <th>Preamble</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>

                    {/*We render the newrecipeList array by using map method and we use (recipe.id) as a key.*/}
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

          <Col  lg="6">
            <div >
              <CardComponent >
                <Form onSubmit={this.addrecipeName}>
                  <Form.Control as="select" className="inputForm" size="lg" value={category}  onChange={this.handleInputChange('category')} >
                    <option>Select category</option>
                    <option>Fisk</option>
                    <option>Kött</option>
                    <option>Kyckling</option>
                    <option>Vegetariskt</option>
                    <option>Dessert</option>
                    <option>Dryck</option>
                  </Form.Control>
                  <br />
                  <Form.Label>Recipe Name :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text" type="text"
                    value={name}  onChange={this.handleInputChange('name')} />
                  <br />
                  <Form.Label>Preamble :</Form.Label>
                  <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                    value={preamble}  onChange={this.handleInputChange('preamble')} />
                  <br />
                  <Form.Label>Ingredients :</Form.Label>
                  <Form.Control as="textarea" rows="5" className="inputForm" size="lg" type="text"
                    value={ingredients}  onChange={this.handleInputChange('ingredients')} />
                  <br />
                  <Form.Label>Preparation :</Form.Label>
                  <Form.Control as="textarea" rows="10" className="inputForm" size="lg" type="text"
                    value={preparation}  onChange={this.handleInputChange('preparation')} />
                  <br />
                  <Form.Label>Image's name :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={imagePath}  onChange={this.handleInputChange('imagePath')} />
                  
                  <br />
                  <Form.Label>Vido link :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={videoPath}  onChange={this.handleInputChange('videoPath')} />
                  <br />
                  <Form.Label>The number of portions :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="Number"
                    value={portions}  onChange={this.handleInputChange('portions')} />
                  <br />
                  <Form.Label>Preparation's time :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={preparationTime}  onChange={this.handleInputChange('preparationTime')} />
                  <br />
                  <Form.Label>Diet :</Form.Label>
                  <Form.Control className="inputForm" size="lg" type="text"
                    value={diet}  onChange={this.handleInputChange('diet')} />
                  <br />
                  {/*We call addrecipeName method when we click the submit button in the form .*/}
                  <Button variant="success" type="submit">Add recipe to database</Button>
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

export default withHTTPRequests(RecipesComponent);
