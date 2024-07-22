let people = {};

exports.handler = async event => {
    const id = event.queryStringParameters.id;
    const requestBody = JSON.parse(event.body);
    
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify(people[id]) || JSON.stringify({ lvl: 1 })
        };
    } else if (event.httpMethod === 'POST') {
        people[id] = requestBody;
        return {
            statusCode: 200,
            body: JSON.stringify(people[id])
        };
    } else {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
};
