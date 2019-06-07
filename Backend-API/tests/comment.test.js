// Mongoose and mocking requests
const mongoose = require('mongoose')
const sinon = require('sinon');
require('sinon-mongoose')

// initialize the app and models
const app = require('../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Comment = mongoose.model('Comment')


var userMock = sinon.mock(Comment)
before(() => {
});

afterEach( () => {
	userMock.verify();
	userMock.restore(); // Unwraps the spy
});


describe('Comment Integration tests', () => {

	// Our test data
	const expected = {
		"_id": "5cfa59121a2568353438a28e",
		"userId": "coolz@gmail.com",
		"recipeId": "coolz",
		"comment":"user",
		"__v": 0
	}

	describe('comment.getComment', ()  => {

		it('Should return an array of all comments', (done) => {

			// Given (preconditions)
			userMock
			.expects('find')
			.chain('exec')
			.resolves([expected]);

			// When (someting happens)
			agent
			.get('/comments')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
		});

		it('Should get a comment by id', (done) => {

			// Given (preconditions)
			userMock
			.expects('findById')
			.withArgs("5cfa59121a2568353438a28e")
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.get('/comments/5cfa59121a2568353438a28e')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	});

	describe('comments.postComment', ()  => {
		it('Should be able to create a comment', (done) => {
			// Given (preconditions)
			userMock
			.expects('create')
			.withArgs({
				"userId": "coolz@gmail.com",
				"recipeId": "coolz",
				"comment": "user",
			})
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.post('/comments/')
			.send(expected)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	})


	// describe('users.putUser', ()  => {
	// 	it('Should be able to update a user', (done) => {
	// 		// Given (preconditions)
	// 		userMock
	// 		.expects('updateOne')
	// 		.withArgs("userId":"5cecf112a66bc43a217dfda3",{
	// 			"email": "coolz@gmail.com",
	// 			"password": "coolz",
	// 			"permission": "user",
	// 		},
	// 		 {" new": "true", "runvalidators": "true", "upsert": "true" }
	// 	)
	// 		.chain('exec')
	// 		.resolves(expected);
	//
	// 		// When (someting happens)
	// 		agent
	// 		.put('/users/5cecf112a66bc43a217dfda3')
	// 		.send(expected)
	// 		.end((err,res) => {
	// 		// Then (something should happen)
	// 			expect(res.status).to.equal(200);
	// 			expect(res.body).to.eql(expected);
	// 			done();
	// 		});
	// 	});
	// })

	describe('comments.deleteComment', ()  => {
		it('Should be able to delete a comment', (done) => {
			// Given (preconditions)
			userMock
			.expects('findByIdAndDelete')
			.withArgs("5cfa59121a2568353438a28e")
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.delete('/comments/5cfa59121a2568353438a28e')
			.send(expected)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				done();
			});
		});
	})
});
