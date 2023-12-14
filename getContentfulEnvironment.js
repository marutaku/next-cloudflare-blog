require("dotenv").config();

const contentfulManagement = require("contentful-management");

module.exports = function () {
  console.log(
    `Getting Contentful environment ${process.env.CONTENTFUL_ENVIRONMENT}...`
  );
  console.log(`Contentful space ID: ${process.env.NEXT_PUBLIC_CTF_SPACE_ID}`);
  console.log(
    `Contentful management API access token: ${process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN}`
  );
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_CTF_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
