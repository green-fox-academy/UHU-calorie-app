'use strict';

import test from 'ava';
import Meal from './meals';

test('return connection', t => {
	var connection = {};
	connection.query = function(query) {
		t.same(query, 'SELECT * FROM meal;');
	};
	var meal = new Meal(connection);
	meal.list();
});

test('add connection', t => {
	var connection = {};
	connection.query = function(query) {
		t.same(query, 'INSERT INTO meal SET ?;');
	};
	var meal = new Meal(connection);
	meal.add();
});

test('del connection', t => {
	var connection = {};
	connection.query = function(query) {
		t.same(query, 'DELETE FROM meal WHERE meal_id = ?;');
	};
	var meal = new Meal(connection);
	meal.del();
});

test('list item', t => {
	var connection = {};
	connection.query = function(query, cb) {
		cb(null, [{}]);
	};
	var meal = new Meal(connection);
	meal.list(function(err, meals) {
		t.ok(meals.length > 0);
	});
});
