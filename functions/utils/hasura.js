const fetch = require("node-fetch");

async function query({ query, variables = {} }) {
  const result = await fetch(process.env.HASURA_API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  // Todo show helpful info if there is an error
  // results.errors

  return result.data;
}

exports.query = query;
