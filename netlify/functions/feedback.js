let feedback = JSON.parse("{}");

exports.handler = async event => {
    const id = event.queryStringParameters.id;
    const requestBody = JSON.parse(event.body);

    if (!feedback[id]) {
        feedback[id] = [];
    }

    feedback[id].append(requestBody);

    return {
        statusCode: 200,
        body: "Thx")
    };
};
