exports.handler = async (event, context, callback) => {
  const { text } = event.queryStringParameters;
  return {
    statusCode: 200,
    body: `You Said: ${text}`,
  };
};
