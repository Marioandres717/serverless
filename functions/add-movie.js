const { query } = require("./utils/hasura");

exports.handler = async (event, context, callback) => {
  const { id, title, tagline, poster } = JSON.parse(event.body);

  const result = await query({
    query: `
       mutation MyMutation($id: String = "", $poster: String = "", $tagline: String = "", $title: String = "") {
        insert_movies_one(object: {tagline: $tagline, poster: $poster, title: $title, id: $id}) {
            id
            poster
            tagline
            title
         }
        }
      `,
    variables: { id, title, tagline, poster },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
