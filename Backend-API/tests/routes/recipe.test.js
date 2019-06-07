// // Mongoose and mocking requests
// const mongoose = require('mongoose')
// const sinon = require('sinon');
// require('sinon-mongoose')
//
// // initialize the app and models
// const app = require('../../index.js')
//
// // sending requests
// const agent = require('supertest').agent(app);
// // validating results
// const expect = require('chai').expect;
//
// // get the model
// const Recipe = mongoose.model('Recipe')
//
//
// var recipeMock = sinon.mock(Recipe)
// before(() => {
// });
//
// afterEach( () => {
// 	recipeMock.verify();
// 	recipeMock.restore(); // Unwraps the spy
// });
//
// describe('Recipe Integration tests', () => {
//
//     // Our test data
//     const expected = {
//     "category": "Huvudrätt",
//     "name": "Kasslersallad med couscous",
//     "preamble": "Fräsch och god sallad",
//     "ingredients": "3 dl couscous",
//     "preparation": "gör den!",
//     "imagePath": "https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg",
//     "videoPath": "NULL",
//     "portions": 2,
//     "preparationTime": "30",
//     "diet": "vegan",
//     "_id": "5cecf112a66bc43a217dfda3",
//     "__v": 0
// }
//
// 	describe('recipes.get', ()  => {
//
// 		it('Should return an array of all recipes', (done) => {
//
// 			// Given (preconditions)
// 			recipeMock
// 			.expects('find')
// 			.chain('exec')
// 			.resolves([expected]);
//
// 			// When (someting happens)
// 			agent
// 			.get('/recipes')
// 			.end((err,res) => {
// 			// Then (something should happen)
// 				expect(res.status).to.equal(200);
// 				expect(res.body).to.eql([expected]);
// 				done();
// 			});
// 		});
//
// 		it('Should get a recipe by category', (done) => {
//
// 			// Given (preconditions)
// 			recipeMock
// 			.expects('findOne')
// 			.withArgs({"category": "Huvudrätt"})
// 			.chain('exec')
// 			.resolves(expected);
//
// 			// When (someting happens)
// 			agent
// 			.get('/recipes?category=coolz')
// 			.end((err,res) => {
// 			// Then (something should happen)
// 				expect(res.status).to.equal(200);
// 				expect(res.body).to.eql(expected);
// 				done();
// 			});
// 		});
// 	});
//
//
//
// 	describe('recipes.post', ()  => {
// 		it('Should be able to create a recipe', (done) => {
// 			// Given (preconditions)
// 			recipeMock
// 			.expects('create')
// 			.withArgs({
//                     "category": "Huvudrätt",
//                     "name": "Kasslersallad med couscous",
//                     "preamble": "Fräsch och god sallad",
//                     "ingredients": "3 dl couscous",
//                     "preparation": "gör den!",
//                     "imagePath": "https://www.wellplated.com/wp-content/uploads/2016/07/Israeli-Couscous-Salad-Feta.jpg",
//                     "videoPath": "NULL",
//                     "portions": 2,
//                     "preparationTime": "30",
//                     "diet": "vegan"
//             })
// 			.chain('exec')
// 			.resolves(expected);
//
// 			// When (someting happens)
// 			agent
// 			.post('/recipes/')
// 			.send(expected)
// 			.end((err,res) => {
// 			// Then (something should happen)
// 				expect(res.status).to.equal(201);
// 				expect(res.body).to.eql(expected);
// 				done();
// 			});
// 		});
// 	})
// });
