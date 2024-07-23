let feedback = JSON.parse("{}");

exports.handler = async event => {
    if (event.httpMethod == "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify(feedback)
        };
    }

    const id = event.queryStringParameters.id;
    const requestBody = JSON.parse(event.body);

    // Assuming feedback is defined somewhere
    if (!feedback[id]) {
        feedback[id] = [];
    }

    feedback[id].push(requestBody); // Use push() instead of append()

    return {
        statusCode: 200,
        body: JSON.stringify("Thx")
    };
};
