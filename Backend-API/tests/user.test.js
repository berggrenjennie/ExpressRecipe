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
const User = mongoose.model('User')


var userMock = sinon.mock(User)
before(() => {
});

afterEach( () => {
	userMock.verify();
	userMock.restore(); // Unwraps the spy
});


describe('User Integration tests', () => {

	// Our test data
	const expected = {
		"_id": "5cecf112a66bc43a217dfda3",
		"email": "coolz@gmail.com",
		"password": "coolz",
		"permission":"user",
		"__v": 0
	}

	describe('users.getUser', ()  => {

		it('Should return an array of all users', (done) => {

			// Given (preconditions)
			userMock
			.expects('find')
			.chain('exec')
			.resolves([expected]);

			// When (someting happens)
			agent
			.get('/users')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
		});

		it('Should get a user by id', (done) => {

			// Given (preconditions)
			userMock
			.expects('findById')
			.withArgs("5cecf112a66bc43a217dfda3")
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.get('/users/5cecf112a66bc43a217dfda3')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	});

	describe('users.postUser', ()  => {
		it('Should be able to create a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('create')
			.withArgs({
				"email": "coolz@gmail.com",
				"password": "coolz",
				"permission": "user",
			})
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.post('/users/')
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

	describe('users.deleteUser', ()  => {
		it('Should be able to delete a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('findByIdAndDelete')
			.withArgs("5cecf112a66bc43a217dfda3")
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.delete('/users/5cecf112a66bc43a217dfda3')
			.send(expected)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				done();
			});
		});
	})
});
