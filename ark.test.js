require('isomorphic-fetch');

// Test name as defined by developer
test('the stop is Arkadian puisto', () => {
	
	// The result we are expecting from the GraphQL API
	const arkP = {
		"stop": {
			"name": "Arkadian puisto", 
			"lat": 60.17112, 
			"lon": 24.93338
		}
	};

	// The URL of the GraphQL API server
	return fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		// The query we are sending to the GraphQL API
		body: JSON.stringify({ query: 
			`query {
				stop(id: "HSL:1040129") {
					name
					lat
					lon
				}
			}` 
		}),
	})
	.then(res => res.json())
	// The test condition itself
	.then(res => expect(res.data).toStrictEqual(arkP));
});

