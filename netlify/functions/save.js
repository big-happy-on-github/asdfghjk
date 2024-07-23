let info = JSON.parse("{}");

exports.handler = async event => {
    const id = event.queryStringParameters.id;
    const requestBody = JSON.parse(event.body);

    if (!info[id]) {
        info[id] = [200,0,100,"default casino",1,0]
    }
    
    if (!requestBody.none) {
        info[id] = requestBody;
    }

    return {
        statusCode: 200,
        body: JSON.stringify(info[id]) || JSON.stringify(["ERR", "ERR", "ERR", "ERR", "ERR", "ERR"])
    };
};
