'use strict';

const app = require('../app');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');

const request = supertest(app);

describe('Server testing', () => {
	it('Response with a string on POST from /talk', async () => {
		let param = 'search-example';
		let response = await request.post('/talk').send({
			search: param,
		});
		expect(response.status).toBe(200);
		expect(typeof response.text).toBe('string');
		expect(response.text).toBe(param);
	});

	it('Response with a string on GET from /repeat', async () => {
		let response = await request.get('/repeat');
		expect(response.status).toBe(200);
		expect(typeof response.text).toBe('string');
	});
});
