// REF:
// https://github.com/hygraph/reference-marketing-website/blob/main/lib/_client.js
import { GraphQLClient } from "graphql-request";

const client = (preview = false) => {
    new GraphQLClient(process.env.HYGRAPH_API_URL)
}

export default client;